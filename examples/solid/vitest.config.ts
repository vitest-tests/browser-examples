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
      provider: 'playwright',
      // TODO: solid plugin breaks if "instances" is used
      // because it injects a copy of it -- this is a bug in plugin-solid
      name: 'chromium',
    },
  },
})
