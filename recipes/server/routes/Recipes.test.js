const express = require('express');
const request = require('supertest');
const nock = require('nock'); // Import Nock for mocking HTTP requests
const router = require('./Recipes');

const app = new express();
app.use('/', router);

// Mocking external services using Nock
beforeAll(() => {
    // Mocking Azure Cosmos DB API endpoints
    nock('https://group-j-db.documents.azure.com:443/')
        .get('/api/recipes')
        .reply(200, [
            { recipe_id: 1, title: 'Mocked Recipe 1', description: 'Mocked description 1' },
            { recipe_id: 2, title: 'Mocked Recipe 2', description: 'Mocked description 2' }
        ]);
    // Add more nock mocks as needed for other endpoints
});

// Test cases
test('get all recipes', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2); // Assuming we have 2 mocked recipes
});

test('get recipe by ID', async () => {
    const res = await request(app).get('/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.recipe_id).toBe(1); // Assuming the mocked recipe has ID 1
});

test('post/delete a recipe by recipe_id', async () => {
    const newRecipe = {
        title: 'New Test Recipe',
        description: 'Description for the new test recipe'
    };
    let res = await request(app).post('/').send(newRecipe);
    expect(res.statusCode).toBe(201);

    // Assuming the response contains the newly created recipe's ID
    const recipeId = res.body.recipe_id;
    
    // Fetch the newly created recipe and verify its details
    res = await request(app).get(`/${recipeId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toEqual(newRecipe.title);

    // Delete the newly created recipe and verify deletion
    res = await request(app).delete(`/${recipeId}`);
    expect(res.body).toEqual({ message: 'Recipe deleted' });
});

// Increase Jest timeout if needed
jest.setTimeout(30000); // 30 seconds
