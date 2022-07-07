/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: { globals: true },
  logLevel: 'info',
  resolve: {
    alias: { '@': './src' },
  },
  plugins: [tsconfigPaths()],
})
