import { act } from "react-dom/test-utils"
import App from "../App"
import { ReactDOM } from "react-dom"
import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'

let el = null;
beforeEach(() => {
  // setup a DOM element as a render target
  el = document.createElement('div');
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(el);
});

test('Grocery List button opens Offcanvas list', async () => {
    await act(async () => {
        ReactDOM.render(<App />, el)
    });
    expect(screen.getAllByText((/home/i))[0]).toBeInTheDocument()
})
// test('clicking the \'X\' closes the list')
// test('clicking outside of the list closes it') // maybe
// test('clicking the \'Increment\' button updates the state of the list')
// test('GroceryList maintains state when closed and reopened')
// test('GroceryList maintains state when page is changed')