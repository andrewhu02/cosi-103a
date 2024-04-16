import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Accordion } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      onDeleteRecipe(recipe.recipe_id); // Delete the recipe using its ID
    }
  };
  

  if (!recipe) {
    return null;
  }

  return (
    <Card sx={{ width: '80%', marginBottom: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.imageSrc}
        alt={recipe.title}
        sx={{ width: '100%', height: '400px' }} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
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
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
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
              <Button variant="danger" onClick={handleDeleteRecipe} style={{ whiteSpace: 'nowrap' }}>Delete Recipe</Button>
            </Col>
          </Row>
        )}
      </CardActions>
    </Card>
  );
};

export default RecipePageTemplate;
