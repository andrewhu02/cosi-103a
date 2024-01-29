import { fireEvent, render, screen } from '@testing-library/react';
import RecipeAccordion from '../App';

test('renders RecipeAccordion component with Recipe 1', () => {
  render(<RecipeAccordion />);
  
  // Assertions for Recipe 1
  expect(screen.getByText('Recipe 1')).toBeInTheDocument();
  expect(screen.getByText('2 lbs chicken thighs')).toBeInTheDocument();
  expect(screen.getByText('1/4 cup olive oil')).toBeInTheDocument();
});

test('check recipe accordion', () => {
  render(<RecipeAccordion />);
  const recipesAccordion = screen.getByText('Recipe 1').parentNode.parentNode.parentNode;
  expect(recipesAccordion).toBeInTheDocument();
});
//recipe 1 is always shown initially
test('check recipe 1', () => {
  render(<RecipeAccordion />);
  const recipeHead = screen.getByText('Recipe 1').parentNode;
  const recipeBody = recipeHead.parentNode.children[1];
  expect(recipeHead).toBeInTheDocument();
  expect(recipeBody).toBeInTheDocument();
  expect(recipeBody).toHaveClass('show');

  // Check if clicking on the title will show the content
  fireEvent.click(recipeHead,()=>{
    expect(recipeBody).not.toHaveClass('show');
  });
});

test('check recipe 2', () => {
  render(<RecipeAccordion />);
  const recipeHead = screen.getByText('Guacamole').parentNode;
  const recipeBody = recipeHead.parentNode.children[1];
  expect(recipeHead).toBeInTheDocument();
  expect(recipeBody).toBeInTheDocument();
  expect(recipeBody).not.toHaveClass('show');

  // Check if clicking on the title will show the content
  fireEvent.click(recipeHead,()=>{
    expect(recipeBody).toHaveClass('show');
  });
});

test('check recipe 3', () => {
  render(<RecipeAccordion />);
  const recipeHead = screen.getByText('Recipe 3').parentNode;
  const recipeBody = recipeHead.parentNode.children[1];
  expect(recipeHead).toBeInTheDocument();
  expect(recipeBody).toBeInTheDocument();
  expect(recipeBody).not.toHaveClass('show');

  // Check if clicking on the title will show the content
  fireEvent.click(recipeHead,()=>{
    expect(recipeBody).toHaveClass('show');
  });
});

test('check recipe 4', () => {
  render(<RecipeAccordion />);
  const recipeHead = screen.getByText('Recipe 4').parentNode;
  const recipeBody = recipeHead.parentNode.children[1];
  expect(recipeHead).toBeInTheDocument();
  expect(recipeBody).toBeInTheDocument();
  expect(recipeBody).not.toHaveClass('show');

  // Check if clicking on the title will show the content
  fireEvent.click(recipeHead,()=>{
    expect(recipeBody).toHaveClass('show');
  });
});

test('check recipe 5', () => {
  render(<RecipeAccordion />);
  const recipeHead = screen.getByText('Recipe 5').parentNode;
  const recipeBody = recipeHead.parentNode.children[1];
  expect(recipeHead).toBeInTheDocument();
  expect(recipeBody).toBeInTheDocument();
  expect(recipeBody).not.toHaveClass('show');

  // Check if clicking on the title will show the content
  fireEvent.click(recipeHead,()=>{
    expect(recipeBody).toHaveClass('show');
  });
});

test('check recipe 6', () => {
  render(<RecipeAccordion />);
  const recipeHead = screen.getByText('Recipe 6').parentNode;
  const recipeBody = recipeHead.parentNode.children[1];
  expect(recipeHead).toBeInTheDocument();
  expect(recipeBody).toBeInTheDocument();
  expect(recipeBody).not.toHaveClass('show');

  // Check if clicking on the title will show the content
  fireEvent.click(recipeHead,()=>{
    expect(recipeBody).toHaveClass('show');
  });
});

test('check recipe 7', () => {
  render(<RecipeAccordion />);
  const recipeHead = screen.getByText('Recipe 7').parentNode;
  const recipeBody = recipeHead.parentNode.children[1];
  expect(recipeHead).toBeInTheDocument();
  expect(recipeBody).toBeInTheDocument();
  expect(recipeBody).not.toHaveClass('show');

  // Check if clicking on the title will show the content
  fireEvent.click(recipeHead,()=>{
    expect(recipeBody).toHaveClass('show');
  });
});
