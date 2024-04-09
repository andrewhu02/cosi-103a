import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep';

const RecipePage = ({ recipe }) => {
  const { title, description, imageSrc, ingredients, cookingInstructions } = recipe;

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div className="upper-column1">
          <h5 className="subheader">Description</h5>
          <p className="recipe-description">{description}</p>
        </div>
        <div className="upper-column2">
          <img src={imageSrc} alt={title} className="center scaled-image padded-image"/>
        </div>
      </div>

      <div className="container">
        <div className="column1">
          <h2 className="subheader">Ingredients</h2>
          {ingredients && ingredients.length > 0 ? (
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available</p>
          )}
        </div>
        <div className="column2">
          <h2 className="subheader">Cooking Instructions</h2>
          {cookingInstructions && cookingInstructions.length > 0 ? (
            <ul>
              {cookingInstructions.map((step, index) => (
                <RecipeStep key={index} step={{ title: `Step ${index + 1}`, desc: step }} />
              ))}
            </ul>
          ) : (
            <p>No cooking instructions available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;