import React, { useState } from 'react';
import {Form, Stack, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RecipeInput = ({ recipes, setRecipes }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [recipeText, setRecipeText] = useState('');
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([]);
  const [newInstruction, setNewInstruction] = useState([])
  const [cookingInstructions, setInstructions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !recipeText || !ingredients) {
      setError('Please fill out all required fields.');
      return;
    }
    if (imageUrl && !isValidImageUrl(imageUrl)) {
      setError('Invalid image URL.');
      return;
    }

    const newRecipe = {
      title,
      description,
      imageUrl: imageUrl || '/img/food/food.jpg',
      ingredients,
      cookingInstructions,
      recipeText,
    };

    // Make a POST request to add the new recipe
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
      
        // Clear form inputs
        setTitle('');
        setDescription('');
        setImageUrl('');
        setIngredients('');
        setInstructions('');
        setRecipeText('');
        setShowPopup(true);
        setError('');

        setRecipes([...recipes, data]);
        navigate('/all-recipes'); 
      })
      .catch((error) => console.error('Error adding recipe:', error));
  };

  const isValidImageUrl = (url) => {
    //TODO: Check if URL is for a valid image
    return /^https?:\/\//.test(url);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const AddNewIngredient= ()=>{
    setIngredients(([...ingredients,newIngredient]));
    setNewIngredient('');
  }
  const AddNewInstruction=()=>{
    setInstructions(([...cookingInstructions,newInstruction]))
    setNewInstruction('');
  }
  const displayList=(data)=>{
    let str=""
    data.map(ing =>{
      str+=ing+",\n"
    })
  
    return str;
  }

  return (
    <div className="recipe-input-container">
      <h2>Add New Recipe</h2>
      <div className="form-container " >
        <Form className='mx-auto'>
          <Form.Group className='mb-3'>
          <Form.Label> Title:</Form.Label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className='mb-3'>
          <label> Description: </label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label> Image URL (Optional):</Form.Label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
         </Form.Group>
         <Form.Group className='mb-3'>
          
          <Form.Label> Ingredients:  </Form.Label>
            <Stack className='mx-auto' direction='horizontal'> 
              <input type='text' value={newIngredient} onChange={(e)=>{setNewIngredient(e.target.value)}}/>
              <Button onClick={AddNewIngredient}>Add</Button></Stack>
              <Form.Control type='textarea' value={displayList(ingredients)} disabled rows={3}/>
            
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label> Instructions: (Optional) </Form.Label>
        <Stack className='mx-auto' direction='horizontal'> 
              <input type='text' value={newInstruction} onChange={(e)=>{setNewInstruction(e.target.value)}}/>
              <Button onClick={AddNewInstruction}>Add</Button></Stack>
              <Form.Control type='textarea' value={displayList(cookingInstructions)} disabled rows={3}/>
            
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>  Recipe Text:  </Form.Label>
          <textarea value={recipeText} onChange={(e) => setRecipeText(e.target.value)} className="recipe-textarea" />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Add Recipe
        </Button>
      </Form>
      </div>
      {error && <p className="error-message">{error}</p>}
      {showPopup && (
        <div className="popup">
          <p>Recipe added successfully!</p>
          <button onClick={handleClosePopup}>OK</button>
        </div>
      )}
    </div>
  );
};

export default RecipeInput;
