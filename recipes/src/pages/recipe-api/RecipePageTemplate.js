import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Card, Accordion } from 'react-bootstrap';

const RecipePageTemplate = ({ recipe, onUpdateRecipe, onDeleteRecipe }) => {
  const [editing, setEditing] = useState(false);
  const [editedJSON, setEditedJSON] = useState('');

  useEffect(() => {
    if (recipe) {
      setEditedJSON(JSON.stringify(recipe, null, 2));
    }
  }, [recipe]);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleJSONChange = (e) => {
    setEditedJSON(e.target.value);
  };

  const handleUpdateRecipe = () => {
    try {
      const updatedRecipe = JSON.parse(editedJSON);
      onUpdateRecipe(updatedRecipe); // Update the recipe data in the parent component
      toggleEditing();
    } catch (error) {
      console.error('Error parsing JSON:', error);
      // Handle error appropriately (e.g., display error message)
    }
  };

  const handleDeleteRecipe = () => {
    onDeleteRecipe(recipe.id); // Delete the recipe using its ID
  };

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
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} style={{ textAlign: 'left' }}>
                  {ingredient}
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

      {editing ? (
        <div>
          <Form.Control as="textarea" rows={10} value={editedJSON} onChange={handleJSONChange} />
          <Button onClick={handleUpdateRecipe}>Update Recipe</Button>
        </div>
      ) : (
        <Row>
          <Col>
            <Button variant="primary" onClick={toggleEditing}>Edit Recipe</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={handleDeleteRecipe}>Delete Recipe</Button> 
          </Col>
        </Row>
      )}
    </Card>
  );
};

export default RecipePageTemplate;
