import React from 'react';

const RecipeDetails = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h1>{recipe.title}</h1>
          <p style={{ whiteSpace: 'pre-line' }}>{recipe.recipeText}</p>
          {/* TODO: Add more styling later */}
        </div>
      ))}
    </div>
  );
};

// first, get this page to display all recipes from the API
async function AllDetails() {
  // GET list of recipes from API
  const recipes = fetch('/api/recipes', {method: 'GET'})
  return (
    <p>{recipes}</p>
    // next: figure out how to display recipes from API
    // we correctly get the JSON data with all the recipes from this request
  )
}
// then, work on using the FoodData API/parsing recipe details to get ingredient links

// would help to have auto-reload somehow when developing

export default AllDetails;