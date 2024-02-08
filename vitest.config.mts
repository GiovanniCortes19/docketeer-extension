/// <reference types="vitest" />
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    server: {
      deps: {
        inline: ['@docker/extension-api-client']
      }
    },
    deps: {
      moduleDirectories: ['node_modules', './node_modules'],
    },
    // alias: {
    //   '@docker': path.resolve(
    //     __dirname,
    //     './__mocks__/@docker/extension-api-client.js'
    //   ),
    // },
    bail: 2,
    include: ['./tests/components/*.test.tsx', './tests/components/*.test.ts']
  },
  plugins: [react(), tsconfigPaths()] as UserConfig['plugins'],
});
