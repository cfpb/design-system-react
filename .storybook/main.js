module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/assets/'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'display-element-css',
    'storybook-dark-mode'
  ],
  docs: {
    autodocs: true,
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

    // return the customized config
    return config;
  }
};
