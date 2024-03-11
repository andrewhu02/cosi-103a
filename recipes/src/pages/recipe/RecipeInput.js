import React, { useState } from 'react';

const RecipeInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!title || !description) {
      alert('Please fill out all required fields.');
      return;
    }

    // Create a new recipe object
    const newRecipe = {
      title,
      description,
      imageUrl: '/img/food/food.jpg',
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
        // Optionally, you can handle the new recipe data here if needed
        console.log('New recipe added:', data);

        // Clear form inputs
        setTitle('');
        setDescription('');
      })
      .catch((error) => console.error('Error adding recipe:', error));
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <div>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeInput;
