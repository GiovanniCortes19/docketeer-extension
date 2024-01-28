import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vitest/config';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()] as UserConfig['plugins'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    deps: {
      // moduleDirectories: ['@docker', path.resolve('./node_modules/@docker')],
      external: [/node_modules\/@docker/],
    },
    alias: {
      '@docker': path.resolve(
        __dirname,
        './__mocks__/@docker/extension-api-client.js'
      ),
    },
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: /@docker\/extension-api-client/,
  //       replacement: path.resolve(
  //         __dirname,
  //         'node_modules',
  //         '@docker',
  //         'extension-api-client'
  //       ),
  //     },
  //   ],
  // },
});
