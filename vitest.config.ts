import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig((configEnv) => {
  const resolvedViteConfig =
    typeof viteConfig === 'function' ? viteConfig(configEnv) : viteConfig;

  return mergeConfig(
    resolvedViteConfig,
    defineConfig({
      test: {
        globals: true,
        environment: 'jsdom',
        exclude: [
          '**/node_modules/**',
          '**/dist/**',
          '**/.{idea,git,cache,output,temp}/**',
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
      },
    }),
  );
});
