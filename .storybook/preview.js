import '@fontsource-variable/source-sans-3';
import '../src/assets/styles/_shared.scss';
import themeCFPB from './themeCFPB';

export const preview = {
  parameters: {
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
};

export default preview;
