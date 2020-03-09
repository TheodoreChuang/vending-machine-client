import React from 'react'
import { render } from '@testing-library/react'
import App, { formatCentToDollars } from './App'

describe('Render Test', () => {
  test('renders title', () => {
    const { getByText } = render(<App />)
    const title = getByText(/Delicious Vegan Chocolate/i)
    expect(title).toBeInTheDocument()
  })
})

describe('Formatter', () => {
  test('formatCentToDollars()', () => {
    expect(formatCentToDollars(100)).toBe('$1')
    expect(formatCentToDollars(200)).toBe('$2')
    expect(formatCentToDollars(50)).toBe('$0.5')
    expect(formatCentToDollars(350)).toBe('$3.5')
  })
})
