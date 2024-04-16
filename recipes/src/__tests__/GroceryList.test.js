import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';
import GroceryList from '../shared/components/grocery_list/GroceryList';
import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils

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
  const user = userEvent.setup();
  render(<App />);
  await act(async () => { // Wrap the code inside act()
    await user.click(screen.getByRole('button', { name: /grocery list/i }));
  });
  expect(screen.getByRole('dialog', { show: true }));
});

test('clicking the \'X\' closes the list', async () => {
  const user = userEvent.setup();
  render(<App />);
  await act(async () => { // Wrap the code inside act()
    await user.click(screen.getByRole('button', { name: /grocery list/i }));
    await user.click(screen.getByRole('button', { name: /close/i }));
  });
  expect(screen.getByRole('dialog', { show: false }));
});

test('handles adding ingredient to the list', async () => {
  const handleClose = jest.fn();
  render(<GroceryList show={true} handleClose={handleClose} />);

  await act(async () => { // Wrap the code inside act()
    fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
      target: { value: 'Tomato' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
      target: { value: '1lb' },
    });
    fireEvent.click(screen.getByText('Add Ingredient'));
  });

  expect(screen.getByText('Tomato')).toBeInTheDocument();
  expect(screen.getByText('1lb')).toBeInTheDocument();
});

test('handles clearing the list', async () => {
  const handleClose = jest.fn();
  render(<GroceryList show={true} handleClose={handleClose} />);

  await act(async () => { // Wrap the code inside act()
    fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
      target: { value: 'Tomato' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
      target: { value: '1lb' },
    });
    fireEvent.click(screen.getByText('Add Ingredient'));
    fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
      target: { value: 'Onion' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
      target: { value: '2lb' },
    });
    fireEvent.click(screen.getByText('Add Ingredient'));
    fireEvent.click(screen.getByText('Clear List'));
  });

  expect(screen.queryByRole('cell')).toBeNull();
});

test('handles deleting ingredient from the list', async () => {
  const handleClose = jest.fn();
  render(<GroceryList show={true} handleClose={handleClose} />);

  await act(async () => { // Wrap the code inside act()
    fireEvent.change(screen.getByPlaceholderText('Enter ingredient name'), {
      target: { value: 'Tomato' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter quantity'), {
      target: { value: '1lb' },
    });
    fireEvent.click(screen.getByText('Add Ingredient'));
    fireEvent.click(screen.getByText('Delete'));
  });

  expect(screen.queryByText('Tomato')).toBeNull();
  expect(screen.queryByText('1lb')).toBeNull();
});

test('list state persists across page changes', async () => {
  const user = userEvent.setup();
  render(<App />);

  await act(async () => { // Wrap the code inside act()
    await user.click(screen.getByRole('button', { name: /grocery list/i }));
    await user.click(screen.getByPlaceholderText(/enter ingredient name/i));
    await user.keyboard('Onion');
    await user.click(screen.getByPlaceholderText(/enter quantity/i));
    await user.keyboard('2lbs');
    await user.click(screen.getByRole('button', { name: /add ingredient/i }));
    await user.click(screen.getByRole('button', { name: /close/i }));
    await user.click(screen.getByRole('link', { name: /about us/i }));
    await user.click(screen.getByRole('button', { name: /grocery list/i }));
  });

  expect(screen.getByText('Onion')).toBeInTheDocument();
  expect(screen.getByText('2lbs')).toBeInTheDocument();
});
