import React, { useEffect, useState } from 'react';
import RecipePageTemplate from './RecipePageTemplate.js'

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState(null); // Set initial state to null

  useEffect(() => {
    fetch('/api/recipes', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  // Render loading state while fetching data
  if (recipes === null) {
    return <div>Loading...</div>;
  }

  // Render the recipes when data is available
  return (
    <div>
      {recipes.map((recipeObject) => (
        <RecipePageTemplate key={recipeObject.id} recipe={recipeObject} />
      ))}
    </div>
  );
};

export default RecipeDetails;
