import React, { useEffect, useState } from 'react';

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
      {recipes.map((recipe) => (
        // modify this to display nicely formatted data for each recipe
        <p>{JSON.stringify(recipe)}</p>
      ))}
    </div>
  )
}

export default RecipeDetails;