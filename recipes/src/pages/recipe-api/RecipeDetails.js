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
    // Find the index of the updated recipe in the recipes array
    const updatedIndex = recipes.findIndex((recipe) => recipe.recipe_id === updatedRecipe.id);
    if (updatedIndex !== -1) {
      // Create a new array with the updated recipe at the corresponding index
      const updatedRecipes = [...recipes];
      updatedRecipes[updatedIndex] = updatedRecipe;
      // Update state with the new array of recipes
      setRecipes(updatedRecipes);
    }
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
