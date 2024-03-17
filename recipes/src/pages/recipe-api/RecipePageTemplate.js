import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

export default function RecipePageTemplate({ recipe }) {
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
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} style={{ textAlign: 'left' }}>
                  <a href={`https://fdc.nal.usda.gov/fdc-app.html#/food-details/${ingredient}`} target="_blank" rel="noopener noreferrer">
                    {ingredient}
                  </a>
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
