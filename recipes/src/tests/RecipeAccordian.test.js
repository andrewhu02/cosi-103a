import {render, screen} from '@testing-library/react';
import RecipeAccordion from '../App';

test('check recipe accordian', () => {
    render(<RecipeAccordion />);
    const recipeChild = screen.getByText('Recipe 1').parentNode;
    expect(recipeChild).toBeInTheDocument();
  });
  test('check recipe 1', () => {
    render(<RecipeAccordion />);
    const recipeChild = screen.getByText('Recipe 1');
    expect(recipeChild).toBeInTheDocument();
    expect
  });