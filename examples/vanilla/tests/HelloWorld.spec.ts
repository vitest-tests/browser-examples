import { expect, test } from 'vitest'
import { page } from 'vitest/browser'
import HelloWorld from '../src/HelloWorld'

test('renders name', async () => {
  const parent = HelloWorld({ name: 'Vitest' })
  const hello = page.getByText('Hello Vitest!')
  await expect.element(hello).toBeInTheDocument()
})
