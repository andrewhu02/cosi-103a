import {fireEvent, render, screen} from '@testing-library/react';
import RecipeAccordion from '../App';

test('check recipe accordian', () => {
    render(<RecipeAccordion />);
    const  recipesAccordian= screen.getByText('Recipe 1').parentNode.parentNode.parentNode;
    // >>>>> !!!<accordion>!!! <accordion.item> <accordion.head> 'Recipe 1 '
    expect(recipesAccordian).toBeInTheDocument();
  });
  test('check recipe 1', () => {
    render(<RecipeAccordion />);
    const recipeHead = screen.getByText('Recipe 1').parentNode;
    const recipeBody = recipeHead.parentNode.parentNode.children[1];
    /*
        <accordian.item>
            <accordian.head>
        >>>><accordian.body>    
    */
    expect(recipeHead).toBeInTheDocument();
    expect(recipeBody).toBeInTheDocument();
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });
