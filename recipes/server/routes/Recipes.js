const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cosmos = require('@azure/cosmos');
const CosmosAccess = require('./CosmosAccess');

const recipes = require("../recipes.json"); // recipes stored here

const endpoint = 'https://group-j-db.documents.azure.com:443/';
let client, container;

// Check if environment variables for authentication are available
if (process.env.AZURE_TENANT_ID && process.env.AZURE_CLIENT_ID && process.env.AZURE_CLIENT_SECRET) {
    const { DefaultAzureCredential } = require('@azure/identity');
    const credential = new DefaultAzureCredential();

    // Initialize Cosmos DB client with Azure AD credentials
    client = new cosmos.CosmosClient({
        endpoint,
        credential
    });

    const database = client.database('recipe-site');
    container = database.container('recipes');
}

router.use(bodyParser.json());

// endpoint to get all recipes
router.get('/', (req, res) => {
    // If container is not initialized, return an error response
    if (!container) {
        return res.status(501).json({ error: 'Cosmos DB authentication failed' });
    }

    CosmosAccess.get_all(container).then(items => {
        res.json(items);
    }).catch(err => {
        console.error('Error fetching recipes:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

// add endpoint to get default recipes

// add endpoint to get user-added recipes

// endpoint to get one recipe by recipe_id
router.get('/:recipe_id', (req, res) => {
    // If container is not initialized, return an error response
    if (!container) {
        return res.status(501).json({ error: 'Cosmos DB authentication failed' });
    }

    const recipeId = parseInt(req.params.recipe_id);

    CosmosAccess.get_by_recipe_id(container, recipeId).then(item => {
        res.json(item);
    }).catch(err => {
        console.error('Error fetching recipe by ID:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

// endpoint to add a new recipe
router.post('/', (req, res) => {
    // If container is not initialized, return an error response
    if (!container) {
        return res.status(501).json({ error: 'Cosmos DB authentication failed' });
    }

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
    }).catch(err => {
        console.error('Error adding new recipe:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

// endpoint to delete a recipe by ID
router.delete('/:recipe_id', (req, res) => {
    // If container is not initialized, return an error response
    if (!container) {
        return res.status(501).json({ error: 'Cosmos DB authentication failed' });
    }

    const recipeId = parseInt(req.params.recipe_id);

    CosmosAccess.delete_by_recipe_id(container, recipeId).then(response => {
        res.json({ message: 'Recipe deleted'});
    }).catch(err => {
        console.error('Error deleting recipe by ID:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
