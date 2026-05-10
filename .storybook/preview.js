import React from 'react';
import '@fontsource-variable/source-sans-3';
import '../src/assets/styles/_shared.scss';
import themeCFPB from './themeCFPB';

const responsivePreviewQueryParameter = 'responsivePreview';

const viewportOptions = {
  phone: {
    name: 'Phone',
    styles: {
      width: '390px',
      height: '844px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '900px',
    },
    type: 'desktop',
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
          `${viewport.name} (${viewport.styles.width})`,
        ),
        React.createElement('iframe', {
          src: getPreviewSource(context.id),
          title: `${viewport.name} preview`,
          style: {
            background: 'white',
            border: '1px solid #d0d0ce',
            boxSizing: 'border-box',
            height: viewport.styles.height,
            width: viewport.styles.width,
          },
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
