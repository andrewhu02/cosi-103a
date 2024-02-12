import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import GroceryList from '../shared/components/grocery_list/GroceryList'
const guacIngredients=[
    { name:'white onion',
     quantity: '1'
    },
    {name:'lime',
    quantity: '1'
    },
    {name:'jalapeño',
    quantity: '1'
    },
    {name:'avocacdos',
    quantity: '2'
    },
]

describe('testing grocery list',()=>{
   
    test('adding',()=>{
       /* render(<GroceryList />);
        const ingredientInput = screen.getByRole('input',{name: 'name'})
        const numInput = screen.getByRole('input',{name:'quantity'})
        const addBtn = screen.getByRole('button',{value:'Add Ingredient'})
        */
    });
    test('delete one',()=>{

    });
    test('clear all',()=>{

    });
})  