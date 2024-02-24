import path from 'path';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: [...defaultExclude, 'e2e/**'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text-summary', 'text', 'html', 'lcov', 'json-summary'],
      exclude: [
        ...defaultExclude,
        'playwright.config.ts',
        '.next/**',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.ts',
        'test/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
