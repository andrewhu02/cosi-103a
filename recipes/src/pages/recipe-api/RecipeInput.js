import React, { useState } from 'react';
import { Form, Stack, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// define API key here
const apiKey = process.env.REACT_APP_FDA_API_KEY;


const RecipeInput = ({ recipes, setRecipes }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageUrl] = useState('');
  const [JSONText, setJSONText] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  // holds extra info about recipes to include links on RecipeInput page
  const [ingredients, setIngredients] = useState([]);
  // holds only ingredient names to be used in a recipe object posted using API
  const [ingredientNames, setIngredientNames] = useState([]);
  const [newInstruction, setNewInstruction] = useState('');
  const [cookingInstructions, setInstructions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');
  // eslint-disable-next-line
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    if (!title || !description || !ingredients) {
      setError('Please fill out all required fields.');
      return;
    }
    if (imageURL && !isValidImageUrl(imageURL)) {
      setError('Invalid image URL.');
      return;
    }

    const newRecipe = {
      title,
      description,
      imageSrc: imageURL || '/img/food/food.jpg',
      ingredients: ingredientNames, // only post names, not food API info
      cookingInstructions
    };

    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New recipe added:', data);

        setTitle('');
        setDescription('');
        setImageUrl('');
        setIngredients([]);
        setInstructions([]);
        setShowPopup(true);
        setError('');

        setRecipes([...recipes, data]);
      })
      .catch((error) => console.error('Error adding recipe:', error));
  };

  const handleJSONSubmit = (e) => {
    e.preventDefault()
    setShowPopup(true);
    const expectedKeys = ['title', 'description', 'imageSrc', 'ingredients', 'cookingInstructions'];
    for (let i = 0; i < 4; i++) {
      let key = expectedKeys[i];
      if (!JSONText.includes(key)) {
        setError('JSON is missing ' + key + ' value, please add it in');
        return;
      }
    }
    try {
      JSON.parse(JSONText, (key, val) => {
        if (key === 'imageSrc') {
          if (!isValidImageUrl(val)) {
            setError('Invalid Image URL');
            return;
          } else if (val === '') {
            val = '/img/food/food.jpg';
          }
        }
      })
    }
    catch (err) {
      console.log(err)
      setError('This JSON is not in a correct JSON format, please recheck and submit again')
      return;
    }

    fetch('api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONText
    }).then((response) => response.json())
      .then((data) => {
        console.log('New recipe added: ', data)
        setJSONText('');
        setRecipes([...recipes, data]);
      })
      .catch((err) => console.log('Error adding recipe:', err))
  }

  const isValidImageUrl = (url) => {
    return /^https?:\/\//.test(url);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleIngredientLookup = (ingredient) => {
    // fetch from API to display link on RecipeInput page
    // the ingredients objects contain more than just the name
    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${ingredient}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.foods && data.foods.length > 0) {
          const firstResult = data.foods[0];
          const fdcId = firstResult.fdcId;
          fetch(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
              const foodDetails = data.description;
              setIngredients([...ingredients, {
                name: ingredient,
                fdcId: fdcId,
                foodDetails: foodDetails
              }]);
            })
            .catch(error => {
              console.error('Error retrieving food details:', error);
              setError('Error retrieving food details.');
            });
        } else {
          setIngredients([...ingredients, {
            name: ingredient,
            fdcId: null,
            foodDetails: null
          }]);
        }
      })
      .catch(error => {
        console.error('Error looking up ingredient:', error);
        setError('Error looking up ingredient.');
      });
  };


  const AddNewIngredient = () => {
    if (newIngredient.trim() !== '') {
      handleIngredientLookup(newIngredient);
      // add new ingredient name to list to be pushed to API
      setIngredientNames([...ingredientNames, newIngredient]);
    }
    setNewIngredient('');
  };

  const AddNewInstruction = () => {
    setInstructions([...cookingInstructions, newInstruction])
    setNewInstruction('');
  };

  return (
    <div className="recipe-input-container">
      <h2>Add New Recipe</h2>
      <Container>
        <Row>
          <Col>
            <Form className='mx-auto'>
              <Form.Group className='mb-3'>
                <Form.Label> *Title:</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-3'>
                <label> *Description: </label>
                <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label> Image URL (Optional):</Form.Label>
                <Form.Control type="text" value={imageURL} onChange={(e) => setImageUrl(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label> *Ingredients:  </Form.Label>
                <Stack className='mx-auto' direction='horizontal'>
                  <Form.Control type='text' value={newIngredient} onChange={(e) => { setNewIngredient(e.target.value) }} />
                  <Button onClick={AddNewIngredient}>Add</Button></Stack>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.fdcId ? (
                        <a href={`https://fdc.nal.usda.gov/fdc-app.html#/food-details/${ingredient.fdcId}`} target="_blank" rel="noopener noreferrer">
                          {ingredient.name}
                        </a>
                      ) : (
                        ingredient.name
                      )}
                    </li>
                  ))}
                </ul>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label> Instructions: (Optional) </Form.Label>
                <Stack className='mx-auto' direction='horizontal'>
                  <Form.Control type='text' value={newInstruction} onChange={(e) => { setNewInstruction(e.target.value) }} />
                  <Button onClick={AddNewInstruction}>Add</Button></Stack>
                <Form.Control as='textarea' value={cookingInstructions.join(', ')} disabled rows={3} />
              </Form.Group>
              <Button type="submit" onClick={handleSubmit}>
                Submit Recipe
              </Button>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>  JSON  </Form.Label>
                <Form.Control as='textarea' rows={18} value={JSONText}
                  placeholder={'recommended JSON format:\n {\ntitle:\ndescription:\nimageSrc:\ningredients:\ncookingInstructions:\n}'}
                  onChange={(e) => setJSONText(e.target.value)} className="recipe-textarea" />
              </Form.Group>
              <Button type='submit' onClick={handleJSONSubmit}>Submit JSON</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Body>
          <p>
            {error}
            {!error && 'Recipe added successfully'}</p>
        </Modal.Body>
        <Modal.Footer>
          {!error ? (<a href='/all-recipes'>
            <Button>Check Recipes</Button>
          </a>) : ''}
          <Button onClick={handleClosePopup}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RecipeInput;