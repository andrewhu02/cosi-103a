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

export default RecipeDetails;
