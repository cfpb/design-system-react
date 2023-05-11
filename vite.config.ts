import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';
import tsConfigPaths from 'vite-tsconfig-paths';
import { name } from './package.json';

export default defineConfig(() => ({
  plugins: [
    eslintPlugin(),
    svgLoader(),
    react(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true
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
