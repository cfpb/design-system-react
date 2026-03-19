import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const __dirname = import.meta.dirname;
const { resolve } = path;

export default defineConfig(async (configEnv) => {
  const storybookConfigDir = process.env.STORYBOOK_CONFIG_DIR;
  const isStorybookTest = Boolean(storybookConfigDir);
  if (isStorybookTest) {
    // eslint-disable-next-line no-console
    console.log(
      '[storybook][vitest-config] project name:',
      `storybook:${storybookConfigDir}`,
    );
  }
  const resolvedViteConfig =
    typeof viteConfig === 'function' ? await viteConfig(configEnv) : viteConfig;

  return mergeConfig(
    resolvedViteConfig,
    defineConfig({
      test: {
        globals: true,
        ...(isStorybookTest
          ? {
              name: `storybook:${storybookConfigDir}`,
              setupFiles: resolve(__dirname, '.storybook/vitest.setup.ts'),
            }
          : { environment: 'jsdom' }),
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
            },
          },
        },
        ...(isStorybookTest
          ? {
              browser: {
                enabled: true,
                provider: playwright(),
                instances: [{ browser: 'chromium' }],
                headless: true,
              },
            }
          : {}),
      },
    }),
  );
});
