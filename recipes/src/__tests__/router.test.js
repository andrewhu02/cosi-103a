import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from "../App"

describe('routing testing',()=>{
    test('app rendering/navigating with navbar', async () => {
        render(<App />)
        const user = userEvent.setup()

        // verify redirect to /homepage
        // look for the test text because that is only on homepage, but
        // should update with different text once 'test' is replaced
        expect(screen.getAllByText((/test/i))[0]).toBeInTheDocument()

        // verify 'Home' button navigates to home page
        await user.click(screen.getAllByText(/home/i)[0])
        expect(screen.getAllByText((/test/i))[0]).toBeInTheDocument()

        // verify 'All recipes' button navigates to all recipes page
        await user.click(screen.getByRole('button', { name: /recipes/i }))
        await user.click(screen.getByText(/all recipes/i))
        expect(screen.getByRole('heading', { name: /this page shows all recipes/i })).toBeInTheDocument()

        // verify 'About Us' button navigates to About Us page
        await user.click(screen.getAllByText(/about us/i)[0])
        expect(screen.getAllByText('About Us')[1].parentNode).toBeInTheDocument()

    });
describe('testing recipe pages', ()=>{
    
    // verify 'Halal Guys Chicken and Rice' button navigates to that recipe page
    test('chicken and rice', async()=>{
        render(<App/>)
        const user = userEvent.setup()
        await user.click(screen.getByRole('button', {name: /recipes/i}))
        await user.click(screen.getAllByText(/Halal Guys Chicken and Rice/i)[0])
        expect(screen.getByText(/delicious marinated chicken/i)).toBeInTheDocument()
    });
 
    // verify 'Guacamole' button navigates to that recipe page
    test('guacamole', async()=>{
        render(<App/>)
        const user = userEvent.setup()
        await user.click(screen.getByRole('button', { name: /recipes/i }))
        await user.click(screen.getAllByText(/Guacamole/i)[0])
        expect(screen.getByText(/mexican dip/i)).toBeInTheDocument()
    });
    // verify 'Pasta With Pesto' button navigates to that recipe page
    test('pasta with pesto', async()=>{
        render(<App/>)
        const user = userEvent.setup()
        await user.click(screen.getByRole('button', { name: /recipes/i }))
        await user.click(screen.getAllByText(/Pasta With Pesto/i)[0])
        expect(screen.getByText(/delightful and classic italian dish/i)).toBeInTheDocument()
    });
    // verify 'Nigerian Meat Pies' button navigates to that recipe page
    test('nigerian meat pie', async()=>{
        render(<App/>)
        const user = userEvent.setup()
        await user.click(screen.getByRole('button', { name: /recipes/i }))
        await user.click(screen.getAllByText(/Nigerian Meat Pies/i)[0])
        expect(screen.getByText(/savory and comforting pastry/i)).toBeInTheDocument()
    });
    // verify 'Chocolate Chip Cookies' button navigates to that recipe page
    test('choco chip cookies', async()=>{
        render(<App/>)
        const user = userEvent.setup()
        await user.click(screen.getByRole('button', { name: /recipes/i }))
        await user.click(screen.getAllByText(/Chocolate Chip Cookies/i)[0])
        expect(screen.getByText('Chocolate Chip Cookies').parentNode).toBeInTheDocument()
    }); 
    // verify 'Creole Jambalaya' button navigates to that recipe page
    test('creole jambalaya', async()=>{
        render(<App/>)
        const user = userEvent.setup()
        await user.click(screen.getByRole('button', { name: /recipes/i }))
        await user.click(screen.getAllByText(/Creole Jambalaya/i)[0])
        expect(screen.getByText('Creole Jambalaya').parentNode).toBeInTheDocument()
    });
    // verify 'Soup Dumplings' button navigates to that recipe page
    test('soup dumplings', async()=>{
        render(<App/>)
        const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /recipes/i }))
    await user.click(screen.getAllByText(/Soup Dumplings/i)[0])
    expect(screen.getByText('Soup Dumplings').parentNode).toBeInTheDocument()
    });
})
});