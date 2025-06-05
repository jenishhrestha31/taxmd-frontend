import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';
import env from 'vite-plugin-env-compatible';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './tests/coverage',
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [env()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 💡 point to ./src
    },
  },
});
