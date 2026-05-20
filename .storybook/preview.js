import React from 'react';
import { buildArgsParam } from 'storybook/internal/router';
import { useArgs, useGlobals } from 'storybook/preview-api';
import '../src/assets/styles/_shared.scss';
import themeCFPB from './themeCFPB';

const responsivePreviewQueryParameter = 'responsivePreview';

/** Query key read by `.storybook/preview-head.html` inside nested “All viewports” iframes. */
const nestedCanvasPaddingQueryParameter = 'sbNestedCanvasPadding';

/**
 * Nested All-viewports iframes use `responsivePreview=off`. Padding on `#storybook-root` keeps
 * `:focus-visible` rings visible. Full-bleed stories set `parameters.sbNestedCanvasPadding: 'flush'`.
 *
 * @param {Record<string, unknown> | undefined} parameters
 * @returns {'focus' | 'flush'}
 */
const getNestedCanvasPaddingMode = (parameters) =>
  parameters?.sbNestedCanvasPadding === 'flush' ? 'flush' : 'focus';

// Match CFPB design-system breakpoints (16px root): large layout from 63.8125em (~1021px).
// Hero `.m-hero__wrapper` uses min-height + em padding there; 1230px aligns with typical
// max-width + gutters. Storybook also accepts ad-hoc sizes via globals.viewport.value like
// `1230-900` (width-height, px by default) without adding an entry here.
const viewportOptions = {
  desktop: {
    name: 'Desktop (901px and above)',
    styles: {
      // Match design width; iframe uses content-box so border does not shrink the inner viewport.
      width: '1230px',
      height: '900px',
    },
    type: 'desktop',
  },
  tablet: {
    name: 'Tablet (601-900px)',
    styles: {
      width: '900px',
      height: '1024px',
    },
    type: 'tablet',
  },
  phone: {
    name: 'Phone (600px and below)',
    styles: {
      width: '600px',
      height: '844px',
    },
    type: 'mobile',
  },
};

const responsivePreviewOptions = Object.entries(viewportOptions);

/** Extra height on nested All-viewports iframes so :focus-visible rings are not clipped (outline
 *  does not affect layout / scrollHeight). Covers checkbox, large target, fieldset, select, etc. */
const RESPONSIVE_PREVIEW_FOCUS_VERTICAL_BUFFER_PX = 40;

const shouldRenderSinglePreview = (context) => {
  const searchParameters = new URLSearchParams(globalThis.location.search);

  return (
    context.viewMode !== 'story' ||
    context.globals.responsivePreview !== 'all' ||
    searchParameters.get(responsivePreviewQueryParameter) === 'off'
  );
};

/**
 * Build `args` / `globals` query strings for nested iframes (same encoding as Storybook manager).
 *
 * @param {Record<string, unknown>} initialValues
 * @param {Record<string, unknown>} currentValues
 * @returns {string}
 */
const buildNestedQueryParam = (initialValues, currentValues) =>
  buildArgsParam(initialValues ?? {}, currentValues ?? {});

/**
 * @param {string} storyId
 * @param {'focus' | 'flush'} nestedCanvasPaddingMode
 * @param {{ argsParam: string, globalsParam: string }} queryParams
 * @returns {string}
 */
const getPreviewSource = (storyId, nestedCanvasPaddingMode, queryParams) => {
  const url = new URL(globalThis.location.href);

  url.search = '';
  url.searchParams.set('id', storyId);
  url.searchParams.set('viewMode', 'story');
  url.searchParams.set(responsivePreviewQueryParameter, 'off');

  if (nestedCanvasPaddingMode === 'flush') {
    url.searchParams.set(nestedCanvasPaddingQueryParameter, 'flush');
  }

  if (queryParams.argsParam) {
    url.searchParams.set('args', queryParams.argsParam);
  }

  if (queryParams.globalsParam) {
    url.searchParams.set('globals', queryParams.globalsParam);
  }

  return url.toString();
};

const getFrameHeight = (frame) => {
  const frameDocument = frame.contentDocument;

  if (!frameDocument) return 0;

  const { body, documentElement } = frameDocument;
  const storyRoot = frameDocument.getElementById('storybook-root');

  if (storyRoot && body) {
    const win = frame.contentWindow;
    const bodyStyle = win?.getComputedStyle(body);
    const bodyVerticalPadding =
      parseFloat(bodyStyle?.paddingTop ?? '0') +
      parseFloat(bodyStyle?.paddingBottom ?? '0');

    // Prefer #storybook-root box for content height. `body.scrollHeight` alone often tracks the
    // iframe’s current height (min-height / 100% chains). Add body vertical padding when the body
    // has inset (single canvas). Do not add #storybook-root padding again — offsetHeight /
    // scrollHeight already include it when `box-sizing: border-box` (nested All viewports).
    const fromRoot = Math.max(
      storyRoot.scrollHeight,
      storyRoot.offsetHeight,
      storyRoot.getBoundingClientRect().height,
    );

    if (fromRoot > 0) {
      return Math.ceil(fromRoot + bodyVerticalPadding);
    }
  }

  return Math.max(
    body?.scrollHeight ?? 0,
    body?.offsetHeight ?? 0,
    documentElement?.scrollHeight ?? 0,
    documentElement?.offsetHeight ?? 0,
  );
};

const ResponsivePreviewFrame = ({ previewSrc, viewport }) => {
  const [height, setHeight] = React.useState(64);

  const updateHeight = React.useCallback((frame) => {
    const measuredHeight = getFrameHeight(frame);
    const padded = measuredHeight + RESPONSIVE_PREVIEW_FOCUS_VERTICAL_BUFFER_PX;
    // Floor avoids 0 during load; buffer leaves room for focus outlines outside the layout box.
    setHeight(Math.max(Math.ceil(padded), 1));
  }, []);

  return React.createElement('iframe', {
    onLoad: (event) => {
      const frame = event.currentTarget;
      const frameWindow = frame.contentWindow;
      const frameDocument = frame.contentDocument;

      updateHeight(frame);
      frameWindow?.requestAnimationFrame(() => updateHeight(frame));
      frameWindow?.setTimeout(() => updateHeight(frame), 250);

      frameWindow?.addEventListener('resize', () => updateHeight(frame));

      if (frameWindow?.ResizeObserver && frameDocument) {
        const observer = new frameWindow.ResizeObserver(() =>
          updateHeight(frame),
        );
        const storyRoot = frameDocument.getElementById('storybook-root');

        observer.observe(frameDocument.documentElement);
        observer.observe(frameDocument.body);

        if (storyRoot) observer.observe(storyRoot);
      }
    },
    src: previewSrc,
    title: `${viewport.name} preview`,
    style: {
      background: 'white',
      // set border around the iframe
      border: 'none',
      // border-box would make width include the border, so a 900px frame only has ~898px for
      // the document — content-box keeps viewport.styles.width as the iframe layout width.
      boxSizing: 'content-box',
      display: 'block',
      height,
      width: viewport.styles.width,
    },
  });
};

/**
 * All-viewports grid: nested iframes are separate documents; args/globals come from the decorator
 * (`useArgs` / `useGlobals` must run there, not in this child component).
 *
 * @param {{ context: import('storybook/internal/types').StoryContext, nestedCanvasPaddingMode: 'focus' | 'flush', args: Record<string, unknown>, globals: Record<string, unknown> }} props
 */
const AllViewportsPreviews = ({ context, nestedCanvasPaddingMode, args, globals }) => {
  const argsParam = buildNestedQueryParam(context.initialArgs, args);
  const globalsParam = buildNestedQueryParam(context.initialGlobals, globals);
  const previewSrc = getPreviewSource(context.id, nestedCanvasPaddingMode, {
    argsParam,
    globalsParam,
  });
  const iframeCacheKey = `${argsParam}|${globalsParam}`;

  return React.createElement(
    'div',
    {
      style: {
        boxSizing: 'border-box',
        display: 'grid',
        gap: '45px',
        overflowX: 'auto',
        padding: '0px',
      },
    },
    responsivePreviewOptions.map(([key, viewport]) =>
      React.createElement(
        'section',
        {
          key,
          style: {
            display: 'grid',
            justifyItems: 'start',
          },
        },
        React.createElement(
          'p',
          {
            style: {
              color: '#43484e',
              fontWeight: 500,
            },
          },
          `${viewport.name}`,
        ),
        React.createElement(ResponsivePreviewFrame, {
          key: `${key}-${iframeCacheKey}`,
          previewSrc,
          viewport,
        }),
      ),
    ),
  );
};

const renderResponsivePreviews = (Story, context) => {
  const [args] = useArgs();
  const [globals] = useGlobals();

  if (shouldRenderSinglePreview(context)) {
    return React.createElement(Story);
  }

  const nestedCanvasPaddingMode = getNestedCanvasPaddingMode(context.parameters);

  return React.createElement(AllViewportsPreviews, {
    context,
    nestedCanvasPaddingMode,
    args,
    globals,
  });
};

/** Storybook body classes applied by `parameters.layout` (see prepareForStory / WebView). */
const STORYBOOK_LAYOUT_BODY_CLASSES = [
  'sb-main-padded',
  'sb-main-centered',
  'sb-main-fullscreen',
];

/**
 * Only force `sb-main-fullscreen` when a story opts in with `parameters.layout: 'fullscreen'`.
 * Global `layout: 'fullscreen'` in preview was removed because it merges into docs `<Canvas>`.
 *
 * For the default (undefined / `padded`), Storybook already applies `sb-main-padded` — the same
 * ~1rem inset as Overview / autodocs previews. Do not override that here.
 *
 * @type {(Story: any, context: any) => import('react').ReactElement}
 */
const withExplicitFullscreenStoryCanvas = (Story, context) => {
  React.useLayoutEffect(() => {
    if (context.viewMode !== 'story') {
      return undefined;
    }

    if (context.parameters?.layout !== 'fullscreen') {
      return undefined;
    }

    const { body } = document;

    for (const className of STORYBOOK_LAYOUT_BODY_CLASSES) {
      body.classList.remove(className);
    }

    body.classList.add('sb-main-fullscreen');
    return undefined;
  }, [context.viewMode, context.id, context.parameters?.layout]);

  return React.createElement(Story);
};

export const globalTypes = {
  responsivePreview: {
    name: 'Responsive preview',
    description: 'Preview the current story at every configured viewport',
    toolbar: {
      icon: 'browser',
      items: [
        { value: 'single', title: 'Single viewport' },
        { value: 'all', title: 'All viewports' },
      ],
    },
  },
};

export const initialGlobals = {
  responsivePreview: 'single',
  // Omit `globals.viewport` so the toolbar defaults to "Reset viewport" (full canvas).
  // Setting `value: 'desktop'` (or any named key) forces that preset for every story.
};

export const decorators = [
  renderResponsivePreviews,
  withExplicitFullscreenStoryCanvas,
];

export const preview = {
  globalTypes,

  initialGlobals,

  parameters: {
    // Default canvas padding matches Overview `<Canvas>` (`sb-main-padded`, 1rem). Stories that
    // need edge-to-edge can set `parameters.layout: 'fullscreen'` (see
    // `withExplicitFullscreenStoryCanvas`).
    // https://storybook.js.org/docs/configure/story-layout

    viewport: {
      options: viewportOptions,
    },

    options: {
      // Determines the display order of Stories in the sidebar
      storySort: {
        method: 'alphabetical',
        order: [
          'Guides',
          'Components (Verified)',
          [
            'Banner (US gov)',
            'Buttons',
            'Checkboxes',
            ['Overview', '*'], // Display the custom Overview page first
            'Expandables',
            'Fieldsets',
            'Headings',
            'Labels',
            'Links',
            'Pagination',
            'Paragraphs',
            'Radio buttons',
            'Tables',
            'Taglines',
            'Text inputs',
            ['Overview', '*'], // Display the custom Overview page first
            'Text introductions',
            'Wells',
          ],
          'Components (Draft)',
          '*',
        ],
      },
    },

    actions: {},

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    docs: {
      theme: themeCFPB,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  tags: ['autodocs'],

  decorators,
};

export default preview;
