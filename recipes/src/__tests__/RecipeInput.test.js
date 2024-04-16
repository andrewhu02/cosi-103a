import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For using jest-dom matchers
import RecipePageTemplate from '../RecipePageTemplate';
import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils

const sampleRecipe = {
  title: 'Sample Recipe',
  description: 'This is a sample recipe description.',
  imageSrc: 'sample_image.jpg',
  ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
  cookingInstructions: ['Step 1', 'Step 2', 'Step 3'],
};

test('RecipePageTemplate renders correctly', () => {
  render(<RecipePageTemplate recipe={sampleRecipe} />);
  
  expect(screen.getByText(sampleRecipe.title)).toBeInTheDocument();
  expect(screen.getByText(sampleRecipe.description)).toBeInTheDocument();
  expect(screen.getByAltText(sampleRecipe.title)).toHaveAttribute('src', sampleRecipe.imageSrc);

  // Check if ingredients and instructions are rendered
  sampleRecipe.ingredients.forEach((ingredient) => {
    expect(screen.getByText(ingredient)).toBeInTheDocument();
  });
  sampleRecipe.cookingInstructions.forEach((instruction) => {
    expect(screen.getByText(instruction)).toBeInTheDocument();
  });

  // Check if Edit and Delete buttons are rendered
  expect(screen.getByRole('button', { name: /edit recipe/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /delete recipe/i })).toBeInTheDocument();
});

test('Clicking Edit button toggles editing mode', () => {
  render(<RecipePageTemplate recipe={sampleRecipe} />);

  act(() => {
    const editButton = screen.getByRole('button', { name: /edit recipe/i });
    fireEvent.click(editButton);
  });

  // Check if textarea for editing JSON is rendered
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /update recipe/i })).toBeInTheDocument();
});

describe('RecipePageTemplate component', () => {
    test('renders recipe details', () => {
      render(<RecipePageTemplate recipe={sampleRecipe} />);
      expect(screen.getByText(sampleRecipe.title)).toBeInTheDocument();
      expect(screen.getByAltText(sampleRecipe.title)).toBeInTheDocument();
      expect(screen.getByText(sampleRecipe.description)).toBeInTheDocument();
      sampleRecipe.ingredients.forEach((ingredient) => {
        expect(screen.getByText(ingredient)).toBeInTheDocument();
      });
      sampleRecipe.cookingInstructions.forEach((instruction) => {
        expect(screen.getByText(instruction)).toBeInTheDocument();
      });
    });
  
    test('toggles editing mode on clicking Edit Recipe button', () => {
      render(<RecipePageTemplate recipe={sampleRecipe} />);
      
      act(() => {
        const editButton = screen.getByRole('button', { name: /edit recipe/i });
        fireEvent.click(editButton);
      });

      expect(screen.getByRole('textbox', { name: /edited json/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /update recipe/i })).toBeInTheDocument();
    });
  
    test('calls onUpdateRecipe with updated recipe data on clicking Update Recipe button', () => {
      const onUpdateRecipe = jest.fn();
      render(<RecipePageTemplate recipe={sampleRecipe} onUpdateRecipe={onUpdateRecipe} />);
      
      act(() => {
        const editButton = screen.getByRole('button', { name: /edit recipe/i });
        fireEvent.click(editButton);
      });

      const updatedJSONInput = screen.getByRole('textbox', { name: /edited json/i });
      fireEvent.change(updatedJSONInput, { target: { value: JSON.stringify(sampleRecipe) } });

      act(() => {
        const updateButton = screen.getByRole('button', { name: /update recipe/i });
        fireEvent.click(updateButton);
      });

      expect(onUpdateRecipe).toHaveBeenCalledWith(sampleRecipe);
    });
  
    test('calls onDeleteRecipe with recipe ID on clicking Delete Recipe button', () => {
      const onDeleteRecipe = jest.fn();
      render(<RecipePageTemplate recipe={sampleRecipe} onDeleteRecipe={onDeleteRecipe} />);
      
      act(() => {
        const deleteButton = screen.getByRole('button', { name: /delete recipe/i });
        fireEvent.click(deleteButton);
      });

      expect(onDeleteRecipe).toHaveBeenCalledWith(undefined); // Since recipe_id is not provided, expect undefined
    });
  });
