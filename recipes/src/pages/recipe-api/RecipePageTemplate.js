import React, { useState, useEffect } from 'react';
import { Accordion, Card } from 'react-bootstrap';

// define API key here
const apiKey = process.env.REACT_APP_API_KEY;

export default function RecipePageTemplate({ recipe }) {
  const [ingredientsWithLinks, setIngredientsWithLinks] = useState([]);

  useEffect(() => {
    const fetchIngredientLinks = async () => {
      const ingredientLinks = await Promise.all(
        recipe.ingredients.map(async (ingredient) => {
          const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${ingredient}&api_key=${apiKey}`);
          const data = await response.json();
          if (data.foods && data.foods.length > 0) {
            const firstResult = data.foods[0];
            return {
              name: ingredient,
              fdcId: firstResult.fdcId
            };
          } else {
            return {
              name: ingredient,
              fdcId: null
            };
          }
        })
      );
      setIngredientsWithLinks(ingredientLinks);
    };

    fetchIngredientLinks();
  }, [recipe.ingredients]);

  return (
    <Card>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageSrc} className="center scaled-image padded-image" alt={recipe.title} />
      <p>{recipe.description}</p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>
            <ul>
              {ingredientsWithLinks.map((ingredient, index) => (
                <li key={index} style={{ textAlign: 'left' }}>
                  {ingredient.fdcId ? (
                    <a href={`https://fdc.nal.usda.gov/fdc-app.html#/food-details/${ingredient.fdcId}/nutrients`} target="_blank" rel="noopener noreferrer">
                      {ingredient.name}
                    </a>
                  ) : (
                    ingredient.name
                  )}
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Instructions</Accordion.Header>
          <Accordion.Body>
            <ol>
              {recipe.cookingInstructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
}