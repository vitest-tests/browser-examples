import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import HelloWorld from '../src/HelloWorld.vue'

test('renders name and the counter', async () => {
  const { getByText, getByRole } = render(HelloWorld, {
    props: { name: 'Vitest' },
  })

  await expect.element(getByText('Hello Vitest x1!')).toBeInTheDocument()

  await getByRole('button', { name: 'Increment' }).click()

  await expect.element(getByText('Hello Vitest x2!')).toBeInTheDocument()
})
