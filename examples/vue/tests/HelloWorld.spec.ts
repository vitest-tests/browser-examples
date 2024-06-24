import { expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import HelloWorld from '../src/HelloWorld.vue'

test('renders name', () => {
  const { getByText } = render(HelloWorld, {
    props: { name: 'Vitest' },
  })
  const element = getByText('Hello Vitest!')
  expect(element).toBeInTheDocument()
})
