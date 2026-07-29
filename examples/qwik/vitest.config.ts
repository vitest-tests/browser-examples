import { defineConfig } from 'vitest/config'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [qwikVite()],
  // the Qwik optimizer handles all transforms; qwikVite() only knows
  // to disable esbuild, which rolldown-vite replaced with oxc
  oxc: false,
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
