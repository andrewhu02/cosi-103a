// REFERENCE: https://blog.lysender.com/2023/06/jest-react-testing-window-matchmedia-is-not-a-function/

// ./src/setupDomTests.ts
 
// Dummy import so that the linter won't complain
import { render } from '@testing-library/react'
 
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  })
});