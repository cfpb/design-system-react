import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import processIcons from './postcss/processIcons';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import { name } from './package.json';
import fs from 'fs';

export default defineConfig(() => ({
  publicDir: false,
  resolve: {
    alias: {
      '~': resolve(__dirname),
      // Catch-all for internal library paths to bypass restrictive "exports" in package.json
      '@cfpb/cfpb-design-system/src': resolve(
        __dirname,
        'node_modules/@cfpb/cfpb-design-system/src'
      ),
      // Helper for specifically accessing the new abstracts location
      '@cfpb/cfpb-design-system/src/elements/abstracts': resolve(
        __dirname,
        'node_modules/@cfpb/cfpb-design-system/src/elements/abstracts/index.scss'
      )
    }
  },
  plugins: [
    eslintPlugin(),
    {
      name: 'svg-raw-loader',
      enforce: 'pre', // Run before SVGR and other plugins
      load(id) {
        // Only target .svg files that do NOT have a query (like ?react)
        if (id.endsWith('.svg') && !id.includes('?')) {
          const svgRaw = fs.readFileSync(id, 'utf-8');
          // Return the raw SVG content wrapped in a JS export
          return `export default ${JSON.stringify(svgRaw)}`;
        }
      }
    },
    svgr({
      include: '**/*.svg?react'
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
      plugins: [processIcons as any]
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**'
    ],
    // This ensures Vitest uses the same plugin pipeline as Vite
    transformMode: {
      web: [/.[tj]sx?$/]
    },
    css: true,
    server: {
      deps: {
        inline: ['@cfpb', 'vite-plugin-svgr']
      }
    },
    clearMocks: true,
    coverage: {
      provider: 'istanbul',
      enabled: true,
      '100': true,
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
      all: false
    },
    deps: {
      optimizer: {
        web: {
          include: ['vite-plugin-svgr']
        }
      }
    }
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name,
      formats: ['es', 'cjs'],
      fileName: (format): string => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        // This prevents the "flat" file explosion for icons/assets in the root
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'chunks/[name]-[hash].js',
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
