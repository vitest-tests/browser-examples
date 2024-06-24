import { expect, test } from 'vitest'
import { render } from '@marko/testing-library'
import HelloWorld from '../src/HelloWorld.marko'

test('renders name', async () => {
  const { getByText } = await render(HelloWorld, { name: 'Vitest' })
  const element = getByText('Hello Vitest!')
  expect(element).toBeInTheDocument()
})
