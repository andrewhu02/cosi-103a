import React from 'react'
import { render, fireEvent, screen, logRoles } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  // workaround for error when testing
  // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('Grocery List button opens Offcanvas list', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('button', { name: /grocery list/i }))
  expect(screen.getByRole('dialog', { show: true}))
})

test('clicking the \'X\' closes the list', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('button', { name: /grocery list/i }))
  await user.click(screen.getByRole('button', { name: /close/i }))
  expect(screen.getByRole('dialog', { show: false}))
})