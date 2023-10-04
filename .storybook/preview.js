import '@cfpb/cfpb-design-system/src/cfpb-design-system.less';
import { themes } from '@storybook/theming';
import CfpbLogo from '../src/assets/images/cfpb-logo-vertical.png';
import '../src/assets/styles/_shared.less';

const sharedThemeElements = {
  brandTitle: 'CFPB Design System React',
  brandImage: CfpbLogo,
  brandUrl: 'https://cfpb.github.io/design-system/',
  brandTarget: '_blank',
  fontBase: '"Avenir Next", Arial ,sans-serif'
};

export const parameters = {
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
  darkMode: {
    current: 'dark',
    // Override the default dark theme
    dark: {
      ...themes.dark,
      ...sharedThemeElements,
      appBg: 'black'
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      ...sharedThemeElements
    }
  }
};
