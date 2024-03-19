import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

const RecipePageTemplate = ({ recipe }) => {
  const [ingredientsWithLinks, setIngredientsWithLinks] = useState([]);
  const [linksFetched, setLinksFetched] = useState(false);

  const fetchIngredientLinks = async () => {
    if (!recipe) return;

    const ingredientLinks = await Promise.all(
      recipe.ingredients.map(async (ingredient) => {
        // Remove non-alphabetic characters from the ingredient string
        const cleanedIngredient = ingredient.replace(/[^a-zA-Z\s]/g, '');

        const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${cleanedIngredient}&api_key=${process.env.REACT_APP_FDA_API_KEY}`);
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

  // Render only if recipe is available
  if (!recipe) {
    return null;
  }

  return (
    <Card>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageSrc} className="center scaled-image padded-image" alt={recipe.title} />
      <p>{recipe.description}</p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={() => {
            if (!linksFetched) {
              fetchIngredientLinks();
              setLinksFetched(true);
            }
          }}>Ingredients</Accordion.Header>
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
};

export default RecipePageTemplate;
