import React, { useEffect, useState } from 'react';
import RecipePageTemplate from './RecipePageTemplate.js'

// display all recipes from the API
const RecipeDetails = () => {
  // used to store fetched recipes 
  const [recipes, setRecipes] = useState([])
  // GET list of recipes from API
  useEffect(() => {
    fetch('/api/recipes', { method: 'GET' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // the API returns an array of Objects, each is a recipe
        setRecipes(data);
      });
  }, []);
  // return element which displays recipes
  return (
    <div>
      {recipes.map((recipeObject) => (
        // create a page for each recipe using the template
        <RecipePageTemplate recipe={recipeObject} />
      ))}
    </div>
  )
}

export default RecipeDetails;