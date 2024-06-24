import { expect, test } from 'vitest'
import { getByText } from '@testing-library/dom'
import HelloWorld from '../src/HelloWorld'

test('renders name', () => {
  const parent = HelloWorld({ name: 'Vitest' })
  const element = getByText(parent, 'Hello Vitest!')
  expect(element).toBeInTheDocument()
})
