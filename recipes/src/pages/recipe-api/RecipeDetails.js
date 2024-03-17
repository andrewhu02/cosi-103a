import React, { useEffect, useState } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import RecipePageTemplate from './RecipePageTemplate';

// Display all recipes from the API
const RecipeDetails = () => {
  // Used to store fetched recipes 
  const [recipes, setRecipes] = useState([]);

  // GET list of recipes from API
  useEffect(() => {
    fetch('/api/recipes', { method: 'GET' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // The API returns an array of objects, each representing a recipe
        setRecipes(data);
      });
  }, []);

  return (
    <Container>
      <Row>
        {recipes.map((recipe, index) => (
          <Col md={6} key={index}>
            {/* Use the RecipePageTemplate component for each recipe */}
            <RecipePageTemplate recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeDetails;
