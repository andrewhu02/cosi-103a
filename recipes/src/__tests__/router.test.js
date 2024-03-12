import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from "../App"

beforeEach(() => {
    // workaround for error when testing
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});

describe('routing testing', () => {
    test('app rendering/navigating with navbar', async () => {
        render(<App />)
        const user = userEvent.setup()

        // verify redirect to /homepage
        // look for the test text because that is only on homepage, but
        // should update with different text once 'test' is replaced
        expect(screen.getAllByText((/home/i))[0]).toBeInTheDocument()

        // verify 'Home' button navigates to home page
        await user.click(screen.getAllByText(/home/i)[0])
        expect(screen.getAllByText((/home/i))[0]).toBeInTheDocument()


        // ALL RECIPES PAGE HAS BEEN DELETED SO NO LONGER NEED THIS TEST
        // verify 'All recipes' button navigates to all recipes page
        // await user.click(screen.getByRole('button', { name: /recipes/i }))
        // await user.click(screen.getByText(/all recipes/i))
        // expect(screen.getByRole('heading', { name: /this page shows all recipes/i })).toBeInTheDocument()

        // verify 'About Us' button navigates to About Us page
        await user.click(screen.getAllByText(/about us/i)[0])
        expect(screen.getAllByText('About Us')[1].parentNode).toBeInTheDocument()

    });
    describe('testing recipe pages', () => {

        // verify 'Halal Guys Chicken and Rice' button navigates to that recipe page
        test('chicken and rice', async () => {
            render(<App />)
            const user = userEvent.setup()
            await user.click(screen.getByRole('button', { name: /recipes/i }))
            await user.click(screen.getAllByText(/Halal Guys Chicken and Rice/i)[0])
            // expect(screen.getByText(/delicious marinated chicken/i)).toBeInTheDocument()
        });

        // verify 'Guacamole' button navigates to that recipe page
        test('guacamole', async () => {
            render(<App />)
            const user = userEvent.setup()
            await user.click(screen.getByRole('button', { name: /recipes/i }))
            await user.click(screen.getByText(/Guacamole/i)[0])
            // expect(screen.getByText(/mexican dip/i)).toBeInTheDocument()
        });
        // verify 'Pasta With Pesto' button navigates to that recipe page
        test('pasta with pesto', async () => {
            render(<App />)
            const user = userEvent.setup()
            await user.click(screen.getByRole('button', { name: /recipes/i }))
            await user.click(screen.getByText(/Pasta With Pesto/i))
            // expect(screen.getByText(/delightful and classic italian dish/i)).toBeInTheDocument()
        });        
        // verify 'Nigerian Meat Pies' button navigates to that recipe page
        test('nigerian meat pie', async () => {
            render(<App />)
            const user = userEvent.setup()
            await user.click(screen.getByRole('button', { name: /recipes/i }))
            await user.click(screen.getByText(/Nigerian Meat Pies/i)[0])
            // expect(screen.getByText(/savory and comforting pastry/i)).toBeInTheDocument()
        });
        // verify 'Chocolate Chip Cookies' button navigates to that recipe page
        test('choco chip cookies', async () => {
            render(<App />)
            const user = userEvent.setup()
            await user.click(screen.getByRole('button', { name: /recipes/i }))
            await user.click(screen.getByText(/Chocolate Chip Cookies/i)[0])
            // expect(screen.getByText(/doughy yet still fully cooked/i)).toBeInTheDocument()
        });
        // verify 'Creole Jambalaya' button navigates to that recipe page
        test('creole jambalaya', async () => {
            render(<App />)
            const user = userEvent.setup()
            await user.click(screen.getByRole('button', { name: /recipes/i }))
            await user.click(screen.getByText(/Creole Jambalaya/i)[0])
            // expect(screen.getByText(/vibrant and flavorful/i)).toBeInTheDocument()
        });
        // verify 'Soup Dumplings' button navigates to that recipe page
        test('soup dumplings', async () => {
            render(<App />)
            const user = userEvent.setup()
            await user.click(screen.getByRole('button', { name: /recipes/i }))
            await user.click(screen.getByText(/Soup Dumplings/i)[0])
            // expect(screen.getByText(/xiao long bao - soup dumplings/i)).toBeInTheDocument()
        });
    })
});