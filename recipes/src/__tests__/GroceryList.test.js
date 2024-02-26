import React from 'react'
import { render, fireEvent, screen, getByRole, } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import userEvent from '@testing-library/user-event'
import GroceryList from '../shared/components/grocery_list/GroceryList';

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
  expect(screen.getByRole('dialog', { show: true }))
})

test('clicking the \'X\' closes the list', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('button', { name: /grocery list/i }))
  await user.click(screen.getByRole('button', { name: /close/i }))
  expect(screen.getByRole('dialog', { show: false }))
})

// testing with fireEvent works, but userEvent is closer to the actual behavior of a user
test('handles adding ingredient to the list', () => {
  const handleClose = jest.fn();
  render(<GroceryList show={true} handleClose={handleClose} />);

  // enter ingredient details
  fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
    target: { value: 'Tomato' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
    target: { value: '1lb' },
  });

  // click the Add Ingredient button
  fireEvent.click(screen.getByText('Add Ingredient'));

  // check if the ingredient is added to the table
  expect(screen.getByText('Tomato')).toBeInTheDocument();
  expect(screen.getByText('1lb')).toBeInTheDocument();
});

test('handles clearing the list', () => {
  const handleClose = jest.fn();
  render(<GroceryList show={true} handleClose={handleClose} />);

  // add a sample ingredient
  fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
    target: { value: 'Tomato' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
    target: { value: '1lb' },
  });
  fireEvent.click(screen.getByText('Add Ingredient'));

  // add a second sample ingredient
  fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
    target: { value: 'Onion' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
    target: { value: '2lb' },
  });
  fireEvent.click(screen.getByText('Add Ingredient'));

  // click the Clear List button
  fireEvent.click(screen.getByText('Clear List'));

  // assert that the table has no entries
  expect(screen.queryByRole('cell')).toBeNull();
});


test('handles deleting ingredient from the list', () => {
  const handleClose = jest.fn();
  render(<GroceryList show={true} handleClose={handleClose} />);

  // add a sample ingredient
  fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
    target: { value: 'Tomato' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
    target: { value: '1lb' },
  });
  fireEvent.click(screen.getByText('Add Ingredient'));

  // click the Delete button for the added ingredient
  fireEvent.click(screen.getByText('Delete'));

  // check if the ingredient is removed from the table
  expect(screen.queryByText('Tomato')).toBeNull();
  expect(screen.queryByText('1lb')).toBeNull();
});

test('list state persists across page changes', async () => {
  const user = userEvent.setup()
  render(<App />)

  // open list
  await user.click(screen.getByRole('button', { name: /grocery list/i }))

  // add item to list
  await user.click(screen.getByPlaceholderText(/enter ingredient name/i));
  await user.keyboard('Onion')
  await user.click(screen.getByPlaceholderText(/enter quantity/i));
  await user.keyboard('2lbs')
  await user.click(screen.getByRole('button', { name: /add ingredient/i }));

  // close list, change pages, reopen list
  await user.click(screen.getByRole('button', { name: /close/i }))
  await user.click(screen.getByRole('link', { name: /about us/i}))
  await user.click(screen.getByRole('button', { name: /grocery list/i }))

  // assert that item is in the list
  expect(screen.getByText('Onion')).toBeInTheDocument();
  expect(screen.getByText('2lbs')).toBeInTheDocument();
})