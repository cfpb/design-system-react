import litCss from 'vite-plugin-lit-css';
import turbosnap from 'vite-plugin-turbosnap';

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/assets/'],

  // Docs provides MDX/docs pages and autodocs rendering.
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
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

    // Exclude CFPB design-system from prebundling so imports still pass through
    // Vite plugin transforms in Storybook dev mode.
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      '@cfpb/cfpb-design-system',
    ];

    // Skip type declaration generation for non-dist builds
    config.plugins = (config.plugins || []).filter(
      (plugin) => plugin.name !== 'vite:dts',
    );

    // Transform only CFPB element component SCSS into Lit CSS results.
    config.plugins.unshift(
      litCss({
        include: [
          /node_modules[\\/]@cfpb[\\/]cfpb-design-system[\\/]src[\\/]elements[\\/].*\.component\.scss$/,
        ],
        exclude: [/\.global\.(css|scss)$/],
      }),
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
