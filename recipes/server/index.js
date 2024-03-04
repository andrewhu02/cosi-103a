const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002; // i accidentally screwed up port 3001 and decided to use 3002 (didn't restart 3001), but you can switch it back to 3001 when you want to test it

app.use(bodyParser.json());

// mock data for initial recipes
let recipes = [
  { id: 1, title: 'Halal Guys Chicken and Rice', description: 'A delicious street food dish from NYC.' },
  { id: 2, title: 'Guacamole', description: 'A traditional Mexican dip.' },
  // add more recipes e.g. pho, jambalaya meat pies, etc.
];

// endpoint to get all recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// endpoint to add a new recipe
app.post('/api/recipes', (req, res) => {
  const newRecipe = req.body;

  // validate that the received data is a valid recipe
  if (!newRecipe || !newRecipe.title || !newRecipe.description) {
    return res.status(400).json({ error: 'Invalid recipe data' });
  }

  // add the new recipe to the list
  newRecipe.id = recipes.length + 1;
  recipes.push(newRecipe);

  res.status(201).json(newRecipe);
});

// serve static files (React app) from the build directory
app.use(express.static('build'));

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
