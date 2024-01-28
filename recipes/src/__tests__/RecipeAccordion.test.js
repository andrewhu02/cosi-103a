import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeAccordion from './App';  // Assuming 'RecipeAccordion' is in the same file as 'App'

test('renders RecipeAccordion component with Recipe 1', () => {
  render(<RecipeAccordion />);
  
  // Assertions for Recipe 1
  expect(screen.getByText('Recipe 1')).toBeInTheDocument();
  expect(screen.getByText('2 lbs chicken thighs')).toBeInTheDocument();
  expect(screen.getByText('1/4 cup olive oil')).toBeInTheDocument();
});
