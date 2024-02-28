import path from 'path';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: [...defaultExclude, './src/e2e/**'],
    coverage: {
      provider: 'istanbul',
      reporter: [
        'text-summary',
        'text',
        'html',
        'lcov',
        'json-summary',
        'json',
      ],
      exclude: [
        ...defaultExclude,
        'playwright.config.ts',
        'playwright-report/**',
        'src/middleware.ts',
        '.next/**',
        'src/test/mocks/**',
        'next.config.mjs',
        'postcss.config.js',
        'tailwind.config.ts',
        'src/app/layout.tsx',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
