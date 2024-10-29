import { defineConfig } from 'vitest/config'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  define: {
    // solid-testing-library relies on "process" which is not shimmed by default
    'process.env.STL_SKIP_AUTO_CLEANUP': 'false'
  },
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
  },
})
