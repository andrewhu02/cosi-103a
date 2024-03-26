const express = require('express');
const request = require('supertest');

// Import the router
const router = require('./Recipes');

// Create a mocked version of the Express app
const app = express();
app.use('/', router);

// Mocked data for testing
const mockedRecipes = [
  { recipe_id: 1, title: 'Recipe 1', description: 'Description for Recipe 1' },
  { recipe_id: 2, title: 'Recipe 2', description: 'Description for Recipe 2' },
];

// Mock the route handler for getting all recipes
router.get('/', (req, res) => {
  res.json(mockedRecipes);
});

// Mock the route handler for getting a recipe by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = mockedRecipes.find(recipe => recipe.recipe_id === id);
  if (recipe) {
    res.json([recipe]);
  } else {
    res.status(404).json({ message: 'Recipe not found' });
  }
});

// Mock the route handler for posting a recipe
router.post('/', (req, res) => {
  const recipe = req.body;
  // Mocked logic for creating a new recipe
  recipe.recipe_id = mockedRecipes.length + 1;
  mockedRecipes.push(recipe);
  res.status(201).json(recipe);
});

// Mock the route handler for deleting a recipe by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = mockedRecipes.findIndex(recipe => recipe.recipe_id === id);
  if (index !== -1) {
    mockedRecipes.splice(index, 1);
    res.json({ message: 'Recipe deleted' });
  } else {
    res.status(404).json({ message: 'Recipe not found' });
  }
});

// Test cases
test('get all recipes', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(mockedRecipes.length);
});

test('get recipe by ID', async () => {
  const res = await request(app).get('/1');
  expect(res.statusCode).toBe(200);
  expect(res.body[0].recipe_id).toBe(1);
});

test('post/delete a recipe by recipe_id', async () => {
  const newRecipe = {
    title: 'New Test Recipe',
    description: 'Description for the new test recipe',
  };
  // POST request to add a new recipe
  let res = await request(app).post('/').send(newRecipe);
  expect(res.statusCode).toBe(201);
  const newRecipeId = res.body.recipe_id;

  // GET request to retrieve the added recipe
  res = await request(app).get(`/${newRecipeId}`);
  expect(res.statusCode).toBe(200);
  expect(res.body[0].title).toBe('New Test Recipe');

  // DELETE request to delete the added recipe
  res = await request(app).delete(`/${newRecipeId}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Recipe deleted');
});
