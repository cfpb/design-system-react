import '@cfpb/cfpb-design-system/src/cfpb-design-system.less';
import { themes } from '@storybook/theming';

const sharedThemeElements = {
  brandTitle: 'CFPB Design System React',
  brandImage: '../src/assets/images/cfpb-logo-vertical.png',
  brandUrl: 'https://cfpb.github.io/design-system/',
  brandTarget: '_blank',
  fontBase: '"Avenir Next", Arial ,sans-serif'
};

export const parameters = {
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
