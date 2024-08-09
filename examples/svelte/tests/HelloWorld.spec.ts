import { expect, test } from 'vitest'
import { render } from 'vitest-browser-svelte'
import HelloWorld from '../src/HelloWorld.svelte'

test('renders name', async () => {
  const { getByText, getByRole } = render(HelloWorld, { name: 'Vitest' })

  const element = getByText('Hello Vitest x1!')
  await expect.element(element).toBeInTheDocument()

  await getByRole('button', { name: 'Increment '}).click()

  await expect.element(getByText('Hello Vitest x2!')).toBeInTheDocument()
})
