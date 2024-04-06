import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeStep from '../recipe-api/RecipeStep';
import CookingModeDisplay from '../shared/cooking_mode/CookingModeDisplay';
import { getRecipeById } from '../utils/api'; // utils function to fetch recipe data

const RecipePage = () => {
  const { id } = useParams(); // we get the recipe id from URL params here
  const [recipe, setRecipe] = useState(null);
  const [showCookingMode, setShowCookingMode] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const recipeData = await getRecipeById(id); // fetch recipe data using API
        setRecipe(recipeData);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    }

    fetchRecipe();
  }, [id]);

  const handleShowCookingMode = () => {
    setShowCookingMode(true);
  };

  const handleCloseCookingMode = () => {
    setShowCookingMode(false);
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <div className="container">
        <div className="upper-column1">
          <p className="recipe-description">{recipe.description}</p>
        </div>
        <div className="upper-column2">
          <img src={recipe.imageSrc} alt="Recipe" className="center scaled-image padded-image" />
        </div>
      </div>
      <div className="container">
        <div className="column1">
          <h2 className="subheader">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="column2">
          <h2 className="subheader">Cooking Instructions</h2>
          {recipe.cookingInstructions.map((instruction, index) => (
            <RecipeStep key={index} step={{ title: `Step ${index + 1}`, desc: instruction }} />
          ))}
        </div>
      </div>
      <CookingModeDisplay instructionArr={recipe.cookingInstructions} show={showCookingMode} handleClose={handleCloseCookingMode} />
    </div>
  );
};

export default RecipePage;
