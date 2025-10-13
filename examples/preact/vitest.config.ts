import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
