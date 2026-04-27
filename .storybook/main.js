import path from 'node:path';
import turbosnap from 'vite-plugin-turbosnap';

const __dirname = import.meta.dirname;

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [
    '../src/assets/',
    {
      from: path.resolve(
        __dirname,
        '../node_modules/@cfpb/cfpb-design-system/src/components/cfpb-icons/icons',
      ),
      to: '/icons',
    },
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    'storybook-addon-tag-badges',
  ],

  docs: {
    defaultName: 'Overview',
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  features: {},

  async viteFinal(config, { configType }) {
    config.base = process.env.BASE_PATH || config.base;

    // Skip type declaration generation for non-dist builds
    config.plugins = config.plugins.filter(
      (plugin) => plugin.name !== 'vite:dts',
    );

    // load Chromatic's recommended vite plugin for dist builds to create preview-stats.json
    config.plugins = config.plugins.concat(
      turbosnap({
        rootDir: config.root ?? process.cwd(),
      }),
    );

    // return the customized config
    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
