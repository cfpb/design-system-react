import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'CFPB Design System React',
  brandImage: '../src/assets/images/cfpb-seal.png',
  brandUrl: 'https://cfpb.github.io/design-system/',
  brandTarget: '_blank',

  // Typography
  fontBase: '"Avenir Next", Arial ,sans-serif',
  textInverseColor: '#ffffff',

  // Sidebar
  appBg: '#101820', // Background
  app: '#101820', // Background
  colorPrimary: '#ff9e1b', // Folder icon
  colorSecondary: '#0072ce', // onHover, Story icon, Active panel (ex. Addons)

  // Toolbars
  barTextColor: 'white'
});
