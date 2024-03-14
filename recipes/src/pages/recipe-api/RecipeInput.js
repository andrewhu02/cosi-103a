import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeInput = ({ recipes, setRecipes }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [recipeText, setRecipeText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !recipeText) {
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
        setRecipeText('');
        setShowPopup(true);
        setError('');

        setRecipes([...recipes, data]);
        navigate('/recipe-details'); 
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

  return (
    <div className="recipe-input-container">
      <h2>Add New Recipe</h2>
      <div className="form-container">
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Image URL (Optional):
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <label>
          Recipe Text:
          <textarea value={recipeText} onChange={(e) => setRecipeText(e.target.value)} className="recipe-textarea" />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Add Recipe
        </button>
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
