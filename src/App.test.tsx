import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { App } from './App'
describe('app', () => {
  test('renders app component', () => {
    render(<App />)

    const app = screen.getByRole('application')

    expect(app).toHaveTextContent('hello')
  })
})
