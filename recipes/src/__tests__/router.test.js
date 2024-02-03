import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from "../App"

test('app rendering/navigating with navbar', async() => {
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
    await user.click(screen.getByRole('navigation', { name: /recipes/i}))
    await user.click(screen.getByText(/all recipes/i))
    expect(screen.getByRole('heading', { name: /this page shows all recipes/i })).toBeInTheDocument()

    // verify 'About Us' button navigates to About Us page
    await user.click(screen.getByText(/about us/i))
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument()
    
})