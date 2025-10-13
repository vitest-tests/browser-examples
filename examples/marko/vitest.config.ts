import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import marko from '@marko/vite'

export default defineConfig({
  plugins: [marko()],
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
