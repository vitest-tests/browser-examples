import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import HelloWorld from '../src/HelloWorld'

test('renders name', () => {
  const { getByText } = render(<HelloWorld name="Vitest" />)
  const element = getByText('Hello Vitest!')
  expect(element).toBeInTheDocument()
})
