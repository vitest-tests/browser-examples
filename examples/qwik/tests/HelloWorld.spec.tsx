import { expect, test } from 'vitest'
import { render } from 'vitest-browser-qwik'
import HelloWorld from '../src/HelloWorld'

test('renders name', async () => {
  const screen = render(<HelloWorld name="Vitest" />)

  await expect.element(screen.getByText('Hello Vitest x1!')).toBeInTheDocument()
  await screen.getByRole('button', { name: 'Increment' }).click()

  await expect.element(screen.getByText('Hello Vitest x2!')).toBeInTheDocument()
})
