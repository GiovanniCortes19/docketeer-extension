/// <reference types="vitest" />
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    // Ignore console logs when running tests
    onConsoleLog(log) {
      if (log.includes(`Can't Bind ddClient, using Fetch`)) return false;
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    alias: {
      '@docker/extension-api-client': new URL(
        './__mocks__/@docker/extension-api-client.js',
        import.meta.url
      ).pathname,
    },
    bail: 2,
    include: ['./tests/components/*.test.tsx', './tests/components/*.test.ts'],
  },
  plugins: [react(), tsconfigPaths()] as UserConfig['plugins'],
});
