// src/__tests__/RecipeAccordion.test.js

import React from 'react';
import { render } from '@testing-library/react';
import RecipeAccordion from '../App.js';

test('renders RecipeAccordion component with Recipe 1', () => {
  const { getByText } = render(<RecipeAccordion />);
  
  // Assertions for Recipe 1
  expect(getByText('Recipe 1')).toBeInTheDocument();
  expect(getByText('2 lbs chicken thighs')).toBeInTheDocument();
  expect(getByText('1/4 cup olive oil')).toBeInTheDocument();
});

test('renders RecipeAccordion component with Recipe 2', () => {
  const { getByText } = render(<RecipeAccordion />);
  
  // Assertions for Recipe 2
  expect(getByText('Recipe 2')).toBeInTheDocument();
  expect(getByText('ingredient 1')).toBeInTheDocument();
  expect(getByText('This is how to cook this dish...')).toBeInTheDocument();
});

// Repeat the pattern for other recipes (Recipe 3, Recipe 4, etc.)