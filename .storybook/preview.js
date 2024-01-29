import '@cfpb/cfpb-design-system/src/cfpb-design-system.less';
import '../src/assets/styles/_shared.less';
import DocumentationTemplate from './DocumentationTemplate.mdx';
import themeCFPB from './themeCFPB';

export const preview = {
  parameters: {
    options: {
      // Determines the display order of Stories in the sidebar
      storySort: {
        order: ['Guides', 'Components (Verified)', 'Components (Draft)', '*']
      }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme: themeCFPB,
      page: DocumentationTemplate
    }
  }
};

export default preview;
