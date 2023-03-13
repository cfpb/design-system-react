const colors = require('tailwindcss/colors');
const formsPlugin = require('@tailwindcss/forms');

const config = {
  content: ['index.html', 'src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#101820',
      white: colors.white,
      green: {
        dark: '#1e9642',
        'mid-dark': '#1fa040',
        DEFAULT: '#20aa3f',
        90: '#48b753',
        80: '#66c368',
        70: '#93cf7c',
        60: '#addc91',
        50: '#bae0a2',
        40: '#c7e5b3',
        30: '#d4eac6',
        20: '#e2efd8',
        10: '#f0f8eb'
      },
      pacific: {
        dark: '#0050b4',
        'mid-dark': '#0061c1',
        DEFAULT: '#0072ce',
        90: '#2284d5',
        80: '#4497dc',
        70: '#61a7e2',
        60: '#7eb7e8',
        50: '#96c4ed',
        40: '#afd2f2',
        30: '#c3ddf6',
        20: '#d6e8fa',
        10: '#eff8fd'
      },
      gray: {
        dark: '#43484e',
        'mid-dark': '#4f5257',
        DEFAULT: '#5a5d61',
        90: '#676a6f',
        80: '#75787b',
        70: '#838588',
        60: '#919395',
        50: '#a2a3a4',
        40: '#b4b5b6',
        30: '#c3c4c4',
        20: '#d2d3d5',
        10: '#e7e8e9'
      },
      red: {
        dark: '#b63014',
        'mid-dark': '#c3381c',
        DEFAULT: '#d14124',
        90: '#d75a40',
        80: '#dd735d',
        70: '#e28875',
        60: '#e79e8e',
        50: '#ebb0a3',
        40: '#f0c3b8',
        30: '#f3d1c8',
        20: '#f7e0d9',
        10: '#fbefec'
      }
    },
    fontFamily: {
      sans: ['Avenir Next', 'Arial', 'sans-serif']
    },
    extend: {
      boxShadow: {
        glow: '0 0 0 1px #0072ce;'
      }
    }
  },
  experimental: { optimizeUniversalDefaults: true },
  plugins: [formsPlugin]
};
module.exports = config;
