const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const identity = require('@azure/identity');
const cosmos = require('@azure/cosmos');
const CosmosAccess = require('./CosmosAccess');

const recipes = require("../recipes.json"); // recipes stored here

const endpoint = 'https://group-j-db.documents.azure.com:443/';

// Use authentication only if not in a testing environment
let client, container;
if (process.env.NODE_ENV !== 'test') {
    const credential = new identity.DefaultAzureCredential();

    client = new cosmos.CosmosClient({
        endpoint,
        aadCredentials: credential
    });

    const database = client.database('recipe-site');
    container = database.container('recipes');
}

router.use(bodyParser.json());

// endpoint to get all recipes
router.get('/', (req, res) => {
    CosmosAccess.get_all(container).then(items => {
        res.json(items);
    })
    // res.json(recipes);
});

// add endpoint to get default recipes

// add endpoint to get user-added recipes

// endpoint to get one recipe by recipe_id
router.get('/:recipe_id', (req, res) => {
    const recipeId = parseInt(req.params.recipe_id);

    // this method doesn't protect against multiple recipes having the same recipe_id
    CosmosAccess.get_by_recipe_id(container, recipeId).then(item => {
        res.json(item);
    })

    // // find the index of the recipe with the specified ID
    // const recipeIndex = recipes.findIndex((recipe) => recipe.recipe_id === recipeId);

    // // check if the recipe exists
    // if (recipeIndex === -1) {
    //     return res.status(404).json({ error: 'Recipe not found' });
    // }

    // // respond with requested recipe
    // res.json(recipes[recipeIndex]);
})

// endpoint to add a new recipe
router.post('/', (req, res) => {
    const newRecipe = req.body;

    // validate that the received data is a valid recipe
    if (!newRecipe || !newRecipe.title || !newRecipe.description) {
        return res.status(400).json({ error: 'Invalid recipe data' });
    }

    // add the new recipe to the list
    newRecipe.recipe_id = Date.now(); // generates a unique recipe_id
    newRecipe.category = "user";
    CosmosAccess.add_item(container, newRecipe).then(response => {
        res.status(201).json(newRecipe);
    });
});

// endpoint to delete a recipe by ID
router.delete('/:recipe_id', (req, res) => {
    const recipeId = parseInt(req.params.recipe_id);

    CosmosAccess.delete_by_recipe_id(container, recipeId).then(response => {
        res.json({ message: 'Recipe deleted'});
    })

    // // find the index of the recipe with the specified ID
    // const recipeIndex = recipes.findIndex((recipe) => recipe.recipe_id === recipeId);

    // // check if the recipe exists
    // if (recipeIndex === -1) {
    //     return res.status(404).json({ error: 'Recipe not found' });
    // }

    // // remove the recipe from the array
    // recipes.splice(recipeIndex, 1);

});

module.exports = router;
