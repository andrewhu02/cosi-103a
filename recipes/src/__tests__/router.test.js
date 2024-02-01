import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from "../App"

test('app rendering/navigating', async() => {
    render(<App />)
    const user = userEvent.setup()
    
    // verify redirect to/homepage
    expect(screen.getByText(/this is the home page/i)).toBeInTheDocument()

    // verify 'About Us' button navigates to About Us page
    await user.click(screen.getByText(/about us/i))
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument()
})