import turbosnap from 'vite-plugin-turbosnap';

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/assets/'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'display-element-css'
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType }) {
    config.base = process.env.BASE_PATH || config.base;

    // Skip type declaration generation for non-dist builds
    config.plugins = config.plugins.filter(
      plugin => plugin.name !== 'vite:dts'
    );

    // load Chromatic's recommended vite plugin for dist builds to create preview-stats.json
    config.plugins = config.plugins.concat(
      turbosnap({
        rootDir: config.root ?? process.cwd()
      })
    );

    // return the customized config
    return config;
  }
};
