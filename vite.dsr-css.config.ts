import path from 'node:path';
import { defineConfig } from 'vite';

const __dirname = import.meta.dirname;
const { resolve } = path;

/**
 * Second library CSS build: Pattern B companion stylesheet (`dist/dsr.css`).
 *
 * Emits DSR-authored styles only (Tabs, React overrides). Does not embed
 * fonts or Design System molecule CSS — Pattern B apps already load those.
 *
 * Run after the main `vite build` with `emptyOutDir: false` so `index.*` stays.
 */
export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      '~': resolve(__dirname),
      '@cfpb/cfpb-design-system/src': resolve(
        __dirname,
        'node_modules/@cfpb/cfpb-design-system/src',
      ),
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve('src/assets/styles/dsr-styles.ts'),
      formats: ['es'],
      // Throwaway JS stub; removed in the build script after CSS is emitted.
      fileName: () => 'dsr-styles-entry.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'dsr.css',
      },
    },
  },
});
