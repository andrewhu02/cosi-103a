import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RecipePageTemplate from './RecipePageTemplate';

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/api/recipes', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleUpdateRecipeData = (updatedRecipe) => {
    // Send PUT request to update the recipe on the server
    fetch(`/api/recipes/${updatedRecipe.recipe_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => {
        if (res.ok) {
          // If update is successful, update the recipe in the state
          const updatedRecipes = recipes.map((recipe) =>
            recipe.recipe_id === updatedRecipe.recipe_id ? updatedRecipe : recipe
          );
          setRecipes(updatedRecipes);
        } else {
          throw new Error('Failed to update recipe');
        }
      })
      .catch((error) => console.error('Error updating recipe:', error));
  };

  const handleDeleteRecipe = (recipeId) => {
    fetch(`/api/recipes/${recipeId}`, { method: 'DELETE' })
      .then(() => {
        // Filter out the deleted recipe from the recipes array
        const updatedRecipes = recipes.filter((recipe) => recipe.recipe_id !== recipeId);
        // Update state with the new array of recipes
        setRecipes(updatedRecipes);
      })
      .catch((error) => console.error('Error deleting recipe:', error));
  };

  return (
    <Container>
      <Row>
        {recipes.map((recipe, index) => (
          <Col md={6} key={index}>
            {/* Pass handleUpdateRecipeData and handleDeleteRecipe as props */}
            <RecipePageTemplate
              recipe={recipe}
              onUpdateRecipe={handleUpdateRecipeData}
              onDeleteRecipe={handleDeleteRecipe}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeDetails;
