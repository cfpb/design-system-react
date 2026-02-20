import '@fontsource-variable/source-sans-3';
import '../src/assets/styles/_shared.scss';
import themeCFPB from './themeCFPB';

export const preview = {
  parameters: {
    options: {
      // Determines the display order of Stories in the sidebar
      // and is the source of truth for where "CFPB Web Components (Beta)"
      // appears in Storybook navigation.
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
          // Web components are intentionally listed after existing React sections
          // so React verified/draft content remains primary.
          'CFPB web Components (Beta)',
          ['Buttons'],
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
  },

  tags: ['autodocs'],
};

export default preview;
