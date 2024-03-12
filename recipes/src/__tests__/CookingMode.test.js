import React from 'react'
import { render, fireEvent, screen, getByRole, } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import userEvent from '@testing-library/user-event'

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

test('cooking mode button is not visible on homepage', async () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: /cooking mode/i })).toBeNull()
})

test('cooking mode button is not visible on about us page', async () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: /cooking mode/i })).toBeNull()
})

// test('cooking mode button is visible on chicken and rice page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /halal guys chicken and rice/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })

// test('cooking mode opens on chicken and rice page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /halal guys chicken and rice/i })[0])
//     await user.click(screen.getByRole('button', { name: /cooking mode/i }))
//     expect(screen.getByRole('heading', { name: /cut the chicken beforehand to cook it more evenly and avoid staining the cutting board/i })).toBeInTheDocument()
// })

// test('next button on chicken and rice page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /halal guys chicken and rice/i })[0])
//     await user.click(screen.getByRole('button', { name: /cooking mode/i }))
//     await user.click(screen.getAllByRole('button', { name: /next/i })[1])
//     expect(screen.getByRole('button', { name: /slide 2/i})).toHaveAttribute("aria-current", "true");
// })

// test('previous button on chicken and rice page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /halal guys chicken and rice/i })[0])
//     await user.click(screen.getByRole('button', { name: /cooking mode/i }))
//     await user.click(screen.getAllByRole('button', { name: /next/i })[1])
//     await user.click(screen.getAllByRole('button', { name: /previous/i })[1])
//     expect(screen.getByRole('button', { name: /slide 1/i})).toHaveAttribute("aria-current", "true");
// })

// test('close button on chicken and rice page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /halal guys chicken and rice/i })[0])
//     await user.click(screen.getByRole('button', { name: /cooking mode/i }))
//     await user.click(screen.getAllByRole('button', { name: /close/i })[1])
//     expect(screen.queryByRole('heading', { name: /cut the chicken beforehand to cook it more evenly and avoid staining the cutting board/i })).toBeNull()
// })

// test('cooking mode button is visible on guacamole page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /guacamole/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })

// test('cooking mode button is visible on pesto page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /pesto/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })

// test('cooking mode button is visible on meat pies page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /meat pies/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })

// test('cooking mode button is visible on cookies page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /cookies/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })

// test('cooking mode button is visible on jambalaya page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /jambalaya/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })

// test('cooking mode button is visible on soup dumpings page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /soup dumplings/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })

// test('cooking mode button is visible on pho page', async () => {
//     render(<App />)
//     const user = userEvent.setup()
//     await user.click(screen.getByRole('button', { name: /recipes/i }))
//     await user.click(screen.getAllByRole('link', { name: /pho/i })[0])
//     expect(screen.getByRole('button', { name: /cooking mode/i })).toBeInTheDocument()
// })
