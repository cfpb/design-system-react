import eslintPlugin from '@nabla/vite-plugin-eslint';
import pluginReact from '@vitejs/plugin-react';
import path from 'node:path';

import removeAttributes from 'rollup-plugin-jsx-remove-attributes';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import { name } from './package.json';
import { svgRawLoaderPlugin } from './vite/plugins/svg-raw-loader';

const __dirname = import.meta.dirname;
const { resolve } = path;

// Auto-detect Storybook from the CLI command.
const isStorybook = process.argv.some((arg) => arg.includes('storybook'));

export default defineConfig(({ mode }) => {
  const plugins: Plugin[] = [
    eslintPlugin(),
    svgRawLoaderPlugin(),
    svgr({
      include: '**/*.svg?react',
    }),
    pluginReact(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    mode === 'test'
      ? null
      : removeAttributes({
          attributes: ['data-testid'],
          usage: 'vite',
        }),
  ].filter(Boolean) as Plugin[];

  return {
    publicDir: false,
    resolve: {
      alias: {
        '~': resolve(__dirname),
        // Catch-all for internal library paths to bypass restrictive "exports" in package.json
        '@cfpb/cfpb-design-system/src': resolve(
          __dirname,
          'node_modules/@cfpb/cfpb-design-system/src',
        ),
        // Helper for specifically accessing the new abstracts location
        '@cfpb/cfpb-design-system/src/elements/abstracts': resolve(
          __dirname,
          'node_modules/@cfpb/cfpb-design-system/src/elements/abstracts/index.scss',
        ),
      },
    },
    plugins,
    build: {
      lib: {
        entry: resolve('src', 'index.ts'),
        name,
        formats: ['es', 'cjs'],
        fileName: (format): string => `index.${format === 'es' ? 'mjs' : 'js'}`,
      },
      rollupOptions: {
        // Only externalize in production/library build, not in Storybook dev mode.
        external: isStorybook
          ? []
          : [
              'react',
              'react-dom',
              'react-router',
              'react/jsx-runtime',
              'react/jsx-dev-runtime',
            ],
        output: {
          // This prevents the "flat" file explosion for icons/assets in the root
          assetFileNames: 'index.css',
          chunkFileNames: 'chunks/[name]-[hash].js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-router': 'ReactRouter',
          },
        },
      },
    },
    optimizeDeps: {
      // Only exclude in production/library build, not in Storybook dev mode.
      exclude: isStorybook ? [] : ['react', 'react-dom', 'react-router'],
    },
  };
});
