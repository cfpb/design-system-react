import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import processIcons from './postcss/processIcons';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';
import svgLoader from 'vite-svg-loader';
import tsConfigPaths from 'vite-tsconfig-paths';
import { name } from './package.json';

export default defineConfig(() => ({
  resolve: {
    alias: {
      '~': resolve(__dirname),
      '@cfpb/cfpb-design-system/src/index': resolve(
        __dirname,
        'node_modules/@cfpb/cfpb-design-system/src/index.scss'
      ),
      '@cfpb/cfpb-design-system/src/abstracts': resolve(
        __dirname,
        'node_modules/@cfpb/cfpb-design-system/src/abstracts/index.scss'
      ),
      '@cfpb/cfpb-design-system/src/utilities': resolve(
        __dirname,
        'node_modules/@cfpb/cfpb-design-system/src/utilities/index.scss'
      ),
      '@cfpb/cfpb-design-system/src/components/cfpb-typography/mixins': resolve(
        __dirname,
        'node_modules/@cfpb/cfpb-design-system/src/components/cfpb-typography/mixins.scss'
      ),
      '@cfpb/cfpb-design-system/src/components/cfpb-notifications/vars':
        resolve(
          __dirname,
          'node_modules/@cfpb/cfpb-design-system/src/components/cfpb-notifications/vars.scss'
        )
    }
  },
  plugins: [
    eslintPlugin(),
    svgLoader({
      defaultImport: 'raw' // Allows DS to render it's own icons
    }),
    react(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true
    }),
    VitePluginReactRemoveAttributes({
      attributes: ['data-testid']
    })
  ],
  css: {
    postcss: {
      plugins: [processIcons]
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    coverage: {
      provider: 'istanbul',
      enabled: true,
      '100': true,
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
      all: false
    },
    server: {
      deps: {
        // [Fix] TypeError: Unknown file extension ".svg" for @cpfb/cfpb-icons
        inline: ['@cfpb']
      }
    }
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name,
      formats: ['es', 'cjs'],
      fileName: (format): string => `${name}.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    },
    optimizeDeps: {
      exclude: ['react', 'react-dom', 'react-router-dom']
    },
    esbuild: {
      minify: true
    }
  }
}));
