import { defineConfig } from 'vitest/config'
import marko from '@marko/vite'

export default defineConfig({
  plugins: [marko()],
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
