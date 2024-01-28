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
    !expect(recipeBody).toBeVisible();
    //checks if clicking on the title will show the content
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });
  test('check recipe 2', () => {
    render(<RecipeAccordion />);
    const recipeHead = screen.getByText('Recipe 2').parentNode;
    const recipeBody = recipeHead.parentNode.parentNode.children[1];
    /*
        <accordian.item>
            <accordian.head>
        >>>><accordian.body>    
    */
    expect(recipeHead).toBeInTheDocument();
    expect(recipeBody).toBeInTheDocument();
    !expect(recipeBody).toBeVisible();
    //checks if clicking on the title will show the content
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });
  test('check recipe 3', () => {
    render(<RecipeAccordion />);
    const recipeHead = screen.getByText('Recipe 3').parentNode;
    const recipeBody = recipeHead.parentNode.parentNode.children[1];
    /*
        <accordian.item>
            <accordian.head>
        >>>><accordian.body>    
    */
    expect(recipeHead).toBeInTheDocument();
    expect(recipeBody).toBeInTheDocument();
    !expect(recipeBody).toBeVisible();
    //checks if clicking on the title will show the content
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });
  test('check recipe 4', () => {
    render(<RecipeAccordion />);
    const recipeHead = screen.getByText('Recipe 4').parentNode;
    const recipeBody = recipeHead.parentNode.parentNode.children[1];
    /*
        <accordian.item>
            <accordian.head>
        >>>><accordian.body>    
    */
    expect(recipeHead).toBeInTheDocument();
    expect(recipeBody).toBeInTheDocument();
    !expect(recipeBody).toBeVisible();
    //checks if clicking on the title will show the content
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });
  test('check recipe 5', () => {
    render(<RecipeAccordion />);
    const recipeHead = screen.getByText('Recipe 5').parentNode;
    const recipeBody = recipeHead.parentNode.parentNode.children[1];
    /*
        <accordian.item>
            <accordian.head>
        >>>><accordian.body>    
    */
    expect(recipeHead).toBeInTheDocument();
    expect(recipeBody).toBeInTheDocument();
    !expect(recipeBody).toBeVisible();
    //checks if clicking on the title will show the content
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });
  test('check recipe 6', () => {
    render(<RecipeAccordion />);
    const recipeHead = screen.getByText('Recipe 6').parentNode;
    const recipeBody = recipeHead.parentNode.parentNode.children[1];
    /*
        <accordian.item>
            <accordian.head>
        >>>><accordian.body>    
    */
    expect(recipeHead).toBeInTheDocument();
    expect(recipeBody).toBeInTheDocument();
    !expect(recipeBody).toBeVisible();
    //checks if clicking on the title will show the content
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });
  test('check recipe 7', () => {
    render(<RecipeAccordion />);
    const recipeHead = screen.getByText('Recipe 7').parentNode;
    const recipeBody = recipeHead.parentNode.parentNode.children[1];
    /*
        <accordian.item>
            <accordian.head>
        >>>><accordian.body>    
    */
    expect(recipeHead).toBeInTheDocument();
    expect(recipeBody).toBeInTheDocument();
    !expect(recipeBody).toBeVisible();
    //checks if clicking on the title will show the content
    fireEvent.click(recipeHead,()=>{
        expect(recipeBody).toBeVisible();
    })
  });