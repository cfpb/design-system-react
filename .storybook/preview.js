import React from 'react';
import '../src/assets/styles/_shared.scss';
import themeCFPB from './themeCFPB';

const responsivePreviewQueryParameter = 'responsivePreview';

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

const shouldRenderSinglePreview = (context) => {
  const searchParameters = new URLSearchParams(globalThis.location.search);

  return (
    context.viewMode !== 'story' ||
    context.globals.responsivePreview !== 'all' ||
    searchParameters.get(responsivePreviewQueryParameter) === 'off'
  );
};

const getPreviewSource = (storyId) => {
  const url = new URL(globalThis.location.href);

  url.search = '';
  url.searchParams.set('id', storyId);
  url.searchParams.set('viewMode', 'story');
  url.searchParams.set(responsivePreviewQueryParameter, 'off');

  return url.toString();
};

const getFrameHeight = (frame) => {
  const frameDocument = frame.contentDocument;

  if (!frameDocument) return 0;

  const { body, documentElement } = frameDocument;
  const storyRoot = frameDocument.getElementById('storybook-root');

  if (storyRoot && body) {
    const win = frame.contentWindow;
    const rootStyle = win?.getComputedStyle(storyRoot);
    const rootVerticalPadding =
      parseFloat(rootStyle?.paddingTop ?? '0') +
      parseFloat(rootStyle?.paddingBottom ?? '0');

    // Prefer #storybook-root only. `body.scrollHeight` often matches the iframe’s current height
    // (min-height / 100% chains), which leaves a tall band under small components. Hero-sized
    // stories still size correctly from the root box.
    const fromRoot = Math.max(
      storyRoot.scrollHeight,
      storyRoot.offsetHeight,
      storyRoot.getBoundingClientRect().height,
    );

    if (fromRoot > 0) {
      return Math.ceil(fromRoot + rootVerticalPadding);
    }
  }

  return Math.max(
    body?.scrollHeight ?? 0,
    body?.offsetHeight ?? 0,
    documentElement?.scrollHeight ?? 0,
    documentElement?.offsetHeight ?? 0,
  );
};

const ResponsivePreviewFrame = ({ storyId, viewport }) => {
  const [height, setHeight] = React.useState(64);

  const updateHeight = React.useCallback((frame) => {
    const measuredHeight = getFrameHeight(frame);
    // No large minimum — small atoms (radio, label) should hug content. Floor avoids 0 during load.
    setHeight(Math.max(Math.ceil(measuredHeight), 1));
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
    src: getPreviewSource(storyId),
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

const renderResponsivePreviews = (Story, context) => {
  if (shouldRenderSinglePreview(context)) {
    return React.createElement(Story);
  }

  return React.createElement(
    'div',
    {
      style: {
        boxSizing: 'border-box',
        display: 'grid',
        gap: '45px',
        overflowX: 'auto',
        padding: '30px',
      },
    },
    responsivePreviewOptions.map(([key, viewport]) =>
      React.createElement(
        'section',
        {
          key,
          style: {
            display: 'grid',
            // gap: '15px',
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
          storyId: context.id,
          viewport,
        }),
      ),
    ),
  );
};

/** Storybook body classes applied by `parameters.layout` (see prepareForStory / WebView). */
const STORYBOOK_LAYOUT_BODY_CLASSES = [
  'sb-main-padded',
  'sb-main-centered',
  'sb-main-fullscreen',
];

/**
 * Fullscreen on the main Canvas only. Global `parameters.layout: 'fullscreen'` also merges into
 * docs/overview stories and breaks `<Canvas>` (addon-docs prefers `story.parameters.layout` over
 * `parameters.docs.canvas.layout`). Embedded docs previews use `viewMode === 'docs'`, so we skip
 * them here.
 *
 * @type {(Story: any, context: any) => import('react').ReactElement}
 */
const withFullscreenStoryCanvas = (Story, context) => {
  React.useLayoutEffect(() => {
    if (context.viewMode !== 'story') {
      return undefined;
    }

    const layout = context.parameters?.layout;
    const { body } = document;

    if (layout === 'centered') {
      return undefined;
    }

    if (layout === 'none') {
      for (const className of STORYBOOK_LAYOUT_BODY_CLASSES) {
        body.classList.remove(className);
      }

      return undefined;
    }

    // Default (undefined / `padded`) or `fullscreen`: edge-to-edge on the main Canvas.
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

export const decorators = [renderResponsivePreviews, withFullscreenStoryCanvas];

export const preview = {
  globalTypes,

  initialGlobals,

  parameters: {
    // Fullscreen on the main story Canvas is applied by `withFullscreenStoryCanvas` (see
    // decorators). Do not set `layout: 'fullscreen'` here — it merges into docs/overview and
    // breaks embedded Canvas previews.
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
