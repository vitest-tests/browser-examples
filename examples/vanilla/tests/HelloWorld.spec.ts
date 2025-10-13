import { expect, test } from 'vitest'
import {getCurrentSuite} from 'vitest/suite'
import { page } from 'vitest/browser'
import HelloWorld from '../src/HelloWorld'
getCurrentSuite().suite

test('renders name', async () => {
  const parent = HelloWorld({ name: 'Vitest' })
  const hello = page.getByText('Hello Vitest!')
  await expect.element(hello).toBeInTheDocument()
})
