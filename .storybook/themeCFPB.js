import { create } from '@storybook/theming/create';
import CfpbLogo from '../src/assets/images/cfpb-logo-vertical.png';

const colors = {
  black: '#101820',
  gray: '#5a5d61',
  gray10: '#e7e8e9',
  gray40: '#b4b5b6',
  green10: '#f0f8eb',
  teal: '#257675',
  teal80: '#579695'
};

/**
 * Note: Additional CSS customizations are implemented in
 * - /.storybook/manager-head.html
 * - /src/assets/styles/_shared.less
 */
export default create({
  base: 'light',

  brandTitle: 'CFPB Design System React',
  brandImage: CfpbLogo,
  brandUrl: 'https://cfpb.github.io/design-system/',
  brandTarget: '_blank',

  fontBase: '"Avenir Next", Arial ,sans-serif',

  // App
  appBorderColor: colors.gray,
  appContentBg: 'white', // Story overview, tool panel

  // Sidebar
  appBg: 'white', // Background
  textColor: colors.black, // Story names
  textMutedColor: colors.black, // Group names

  // Toolbars
  // colorPrimary: 'color', // Purpose unknown
  colorSecondary: colors.teal, // Selected (Controls, Actions, etc)
  barTextColor: colors.black, // Text & icons
  barSelectedColor: colors.teal,
  barBg: colors.gray10,

  // Form colors (Controls)
  buttonBg: colors.gray10,
  buttonBorder: colors.gray40,
  booleanBg: colors.gray10,
  booleanSelectedBg: colors.teal80,
  inputBg: 'white',
  inputBorder: colors.gray,
  inputTextColor: colors.black
});
