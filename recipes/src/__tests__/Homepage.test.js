import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../pages/Homepage';

describe('Homepage', () => {
  test('renders recipe cards with correct information', () => {
    render(<Homepage />);

    // Replace these queries with actual queries based on your UI structure
    const recipe1Title = screen.getByText(/Halal Guys Chicken and Rice/i);
    const recipe2Title = screen.getByText(/Guacamole/i);
    const recipe3Title = screen.getByText(/Pasta with Pesto/i);
    const recipe4Title = screen.getByText(/Nigerian Meat Pies/i);
    const recipe5Title = screen.getByText(/Chocolate Chip Cookies/i);
    const recipe6Title = screen.getByText(/Creole Jambalaya/i);
    const recipe7Title = screen.getByText(/Soup Dumplings/i);
    const recipe8Title = screen.getByText(/Pho/i);

    // Add more queries as needed for other assertions

    // Assert that the titles are rendered
    expect(recipe1Title).toBeInTheDocument();
    expect(recipe2Title).toBeInTheDocument();
    expect(recipe3Title).toBeInTheDocument();
    expect(recipe4Title).toBeInTheDocument();
    expect(recipe5Title).toBeInTheDocument();
    expect(recipe6Title).toBeInTheDocument();
    expect(recipe7Title).toBeInTheDocument();
    expect(recipe8Title).toBeInTheDocument();

    // You can add more assertions for other elements, descriptions, and links
  });
});
