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
    const updatedRecipes = recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r));
    setRecipes(updatedRecipes);
  };

  const handleDeleteRecipe = (recipeId) => {
    fetch(`/api/recipes/${recipeId}`, { method: 'DELETE' })
      .then(() => {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
        setRecipes(updatedRecipes);
      })
      .catch((error) => console.error('Error deleting recipe:', error));
  };

  return (
    <Container>
      <Row>
        {recipes.map((recipe, index) => (
          <Col md={6} key={index}>
            <RecipePageTemplate recipe={recipe} onUpdateRecipe={handleUpdateRecipeData} onDeleteRecipe={handleDeleteRecipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeDetails;
