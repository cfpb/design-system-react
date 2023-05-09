module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: true
  },
  async viteFinal(config, {
    configType
  }) {
    config.base = process.env.BASE_PATH || config.base;

    // Skip type declaration generation for non-dist builds
    config.plugins = config.plugins.filter(plugin => plugin.name !== 'vite:dts');

    // return the customized config
    return config;
  },
  docs: {
    autodocs: true
  }
};