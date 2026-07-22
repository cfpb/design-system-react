import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const __dirname = import.meta.dirname;
const { resolve } = path;

export default defineConfig((configEnvironment) => {
  const storybookConfigDirectory = process.env.STORYBOOK_CONFIG_DIR;
  const isStorybookTest = Boolean(storybookConfigDirectory);
  if (isStorybookTest) {
    // eslint-disable-next-line no-console
    console.log(
      '[storybook][vitest-config] project name:',
      `storybook:${storybookConfigDirectory}`,
    );
  }
  const resolvedViteConfig =
    typeof viteConfig === 'function'
      ? viteConfig(configEnvironment)
      : viteConfig;

  const svgReactMock = resolve(__dirname, 'test-utils/svg-react-component.tsx');

  return mergeConfig(
    resolvedViteConfig,
    defineConfig({
      resolve: {
        alias: [
          {
            find: /@cfpb\/cfpb-design-system\/.*\.svg\?react$/,
            replacement: svgReactMock,
          },
        ],
      },
      test: {
        globals: true,
        ...(isStorybookTest
          ? {
              name: `storybook:${storybookConfigDirectory}`,
              setupFiles: resolve(__dirname, '.storybook/vitest.setup.ts'),
            }
          : {
              environment: 'jsdom',
              setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
            }),
        exclude: [
          '**/node_modules/**',
          '**/dist/**',
          '**/.{idea,git,cache,output,temp}/**',
          ...(isStorybookTest ? [] : ['**/*.stories.{js,jsx,ts,tsx}']),
        ],
        // This ensures Vitest uses the same plugin pipeline as Vite
        transformMode: {
          web: [/.[tj]sx?$/],
        },
        css: true,
        server: {
          deps: {
            inline: ['@cfpb', 'vite-plugin-svgr'],
          },
        },
        clearMocks: true,
        coverage: {
          provider: 'istanbul',
          enabled: true,
          '100': true,
          reporter: ['text', 'lcov'],
          reportsDirectory: 'coverage',
          all: false,
        },
        deps: {
          optimizer: {
            web: {
              include: ['vite-plugin-svgr'],
              // Keep ?react SVG imports on the Vite plugin pipeline (not prebundled as data URLs).
              exclude: ['@cfpb/cfpb-design-system'],
            },
          },
        },
        ...(isStorybookTest && {
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
            headless: true,
          },
        }),
      },
    }),
  );
});
