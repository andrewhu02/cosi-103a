const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const recipes = require("../recipes.json"); // recipes stored here

router.use(bodyParser.json());

// endpoint to get all recipes
router.get('/', (req, res) => {
    res.json(recipes);
});

// endpoint to get one recipe by ID
router.get('/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);

    // find the index of the recipe with the specified ID
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);

    // check if the recipe exists
    if (recipeIndex === -1) {
        return res.status(404).json({ error: 'Recipe not found' });
    }

    // respond with requested recipe
    res.json(recipes[recipeIndex]);
})

// endpoint to add a new recipe
router.post('/', (req, res) => {
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

// endpoint to delete a recipe by ID
router.delete('/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);

    // find the index of the recipe with the specified ID
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);

    // check if the recipe exists
    if (recipeIndex === -1) {
        return res.status(404).json({ error: 'Recipe not found' });
    }

    // remove the recipe from the array
    recipes.splice(recipeIndex, 1);

    res.json({ message: 'Recipe deleted successfully' });
});

module.exports = router;