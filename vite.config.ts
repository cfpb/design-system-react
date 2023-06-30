import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';
import svgLoader from 'vite-svg-loader';
import tsConfigPaths from 'vite-tsconfig-paths';
import { name } from './package.json';

export default defineConfig(() => ({
  resolve: {
    alias: {
      '~': resolve(__dirname)
    }
  },
  plugins: [
    eslintPlugin(),
    svgLoader({
      defaultImport: 'url'
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
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    coverage: {
      provider: 'istanbul',
      enabled: true,
      '100': true,
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage'
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
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    optimizeDeps: {
      exclude: ['react']
    },
    esbuild: {
      minify: true
    }
  }
}));
