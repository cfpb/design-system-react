import React from 'react';
import '@fontsource-variable/source-sans-3';
import '../src/assets/styles/_shared.scss';
import themeCFPB from './themeCFPB';

const responsivePreviewQueryParameter = 'responsivePreview';

const viewportOptions = {
  desktop: {
    name: 'Desktop (901px and above)',
    styles: {
      width: '1280px',
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

  if (storyRoot) {
    const bodyStyles = frame.contentWindow?.getComputedStyle(body);
    const verticalPadding =
      parseFloat(bodyStyles?.paddingTop ?? '0') +
      parseFloat(bodyStyles?.paddingBottom ?? '0');
    const rootTop = storyRoot.getBoundingClientRect().top;
    const contentBottom = Array.from(storyRoot.querySelectorAll('*')).reduce(
      (bottom, element) =>
        Math.max(bottom, element.getBoundingClientRect().bottom),
      storyRoot.getBoundingClientRect().bottom,
    );

    return Math.ceil(
      Math.max(
        storyRoot.getBoundingClientRect().height,
        storyRoot.scrollHeight,
        storyRoot.offsetHeight,
        contentBottom - rootTop,
      ) + verticalPadding,
    );
  }

  return Math.max(
    body?.scrollHeight ?? 0,
    body?.offsetHeight ?? 0,
    documentElement?.scrollHeight ?? 0,
    documentElement?.offsetHeight ?? 0,
  );
};

const ResponsivePreviewFrame = ({ storyId, viewport }) => {
  const [height, setHeight] = React.useState(240);

  const updateHeight = React.useCallback((frame) => {
    const measuredHeight = getFrameHeight(frame);

    setHeight(Math.max(measuredHeight + 16, 160));
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
      border: '1px solid #d0d0ce',
      boxSizing: 'border-box',
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
        gap: '24px',
        overflowX: 'auto',
        padding: '24px',
      },
    },
    responsivePreviewOptions.map(([key, viewport]) =>
      React.createElement(
        'section',
        {
          key,
          style: {
            display: 'grid',
            gap: '8px',
            justifyItems: 'start',
          },
        },
        React.createElement(
          'div',
          {
            style: {
              color: '#5a5d61',
              fontFamily: 'Source Sans 3 Variable, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: 1.25,
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
  viewport: {
    value: 'responsive',
  },
};

export const decorators = [renderResponsivePreviews];

export const preview = {
  globalTypes,

  initialGlobals,

  parameters: {
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
