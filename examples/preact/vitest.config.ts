import { defineConfig } from 'vitest/config'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
  },
  // TODO: this is to make ecosystem work, remove when fixed
  server: {
    fs: {
      strict: false,
    },
  },
})
