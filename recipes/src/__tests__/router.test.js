import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from "../App"

test('app rendering/navigating with navbar', async () => {
    render(<App />)
    const user = userEvent.setup()

    // verify redirect to /homepage
    // look for the test text because that is only on homepage, but
    // should update with different text once 'test' is replaced
    expect(screen.getAllByText((/test/i))[0]).toBeInTheDocument()

    // verify 'Home' button navigates to home page
    await user.click(screen.getByText(/home/i))
    expect(screen.getAllByText((/test/i))[0]).toBeInTheDocument()

    // verify 'All recipes' button navigates to all recipes page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/all recipes/i))
    expect(screen.getByRole('heading', { name: /this page shows all recipes/i })).toBeInTheDocument()

    // verify 'Halal Guys Chicken and Rice' button navigates to that recipe page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/Halal Guys Chicken and Rice/i))
    expect(screen.getByRole('heading', { name: /Chicken and Rice/i })).toBeInTheDocument()

    // verify 'Guacamole' button navigates to that recipe page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/Guacamole/i))
    expect(screen.getByRole('heading', { name: /Guacamole/i })).toBeInTheDocument()

    // verify 'Pasta With Pesto' button navigates to that recipe page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/Pasta With Pesto/i))
    expect(screen.getByRole('heading', { name: /Pasta With Pesto/i })).toBeInTheDocument()

    // verify 'Nigerian Meat Pies' button navigates to that recipe page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/Nigerian Meat Pies/i))
    expect(screen.getByRole('heading', { name: /Nigerian Meat Pies/i })).toBeInTheDocument()

    // verify 'Chocolate Chip Cookies' button navigates to that recipe page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/Chocolate Chip Cookies/i))
    expect(screen.getByRole('heading', { name: /Chocolate Chip Cookies/i })).toBeInTheDocument()

    // verify 'Creole Jambalaya' button navigates to that recipe page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/Creole Jambalaya/i))
    expect(screen.getByRole('heading', { name: /Creole Jambalaya/i })).toBeInTheDocument()

    // verify 'Soup Dumplings' button navigates to that recipe page
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getByText(/Soup Dumplings/i))
    expect(screen.getByRole('heading', { name: /Soup Dumplings/i })).toBeInTheDocument()

    // verify 'About Us' button navigates to About Us page
    await user.click(screen.getByText(/about us/i))
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument()

})