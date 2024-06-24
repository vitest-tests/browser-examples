import { expect, test } from 'vitest'
import { render } from '@testing-library/svelte'
import HelloWorld from '../src/HelloWorld.svelte'

test('renders name', () => {
  const { getByText } = render(HelloWorld, {
    props: { name: 'Vitest' },
  })
  const element = getByText('Hello Vitest!')
  expect(element).toBeInTheDocument()
})
