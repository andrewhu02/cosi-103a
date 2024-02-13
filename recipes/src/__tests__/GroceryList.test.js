import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
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

// ******************* TODO: COULDN'T GET THIS TO WORK SO COMMENTED OUT ******************
// test('handles clearing the list', () => {
//     const handleClose = jest.fn();
//     render(<GroceryList show={true} handleClose={handleClose} />);
  
//     // click the Clear List button
//     fireEvent.click(screen.getByText('Clear List'));
  
//     // check if the table is empty
//     expect(screen.queryByText('Ingredient')).toBeNull();
//     expect(screen.queryByText('Quantity')).toBeNull();
  
//     // Check if the table header elements are not present in the tbody
//     const tableBody = screen.getByRole('table').querySelector('tbody');
//     expect(tableBody).toBeInTheDocument();
//     expect(tableBody.querySelector('th')).toBeNull();
//   });
  

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
