const express = require('express');
const request = require('supertest');
const router = require('./Recipes');

const app = express();
app.use('/', router);

// Mocking external services using Nock
beforeAll(() => {
    // Mocking the CosmosAccess module to return mock data
    jest.mock('./CosmosAccess', () => ({
        get_all: jest.fn(() => Promise.resolve([
            { recipe_id: 1, title: 'Mocked Recipe 1', description: 'Mocked description 1' },
            { recipe_id: 2, title: 'Mocked Recipe 2', description: 'Mocked description 2' }
        ])),
        get_by_recipe_id: jest.fn((container, recipeId) => {
            const mockRecipes = [
                { recipe_id: 1, title: 'Mocked Recipe 1', description: 'Mocked description 1' },
                { recipe_id: 2, title: 'Mocked Recipe 2', description: 'Mocked description 2' }
            ];
            return Promise.resolve(mockRecipes.find(recipe => recipe.recipe_id === recipeId));
        }),
        add_item: jest.fn((container, newRecipe) => Promise.resolve(newRecipe)),
        delete_by_recipe_id: jest.fn((container, recipeId) => Promise.resolve({ message: 'Recipe deleted' }))
    }));
});

// Test cases
test('get all recipes', async () => {
    try {
        const res = await request(app).get('/');
        console.log('Response:', res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2); // Assuming we have 2 mocked recipes
    } catch (error) {
        console.error('Error in get all recipes test:', error);
        throw error;
    }
});

test('get recipe by ID', async () => {
    try {
        const res = await request(app).get('/1');
        console.log('Response:', res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.recipe_id).toBe(1); // Assuming the mocked recipe has ID 1
    } catch (error) {
        console.error('Error in get recipe by ID test:', error);
        throw error;
    }
});

test('post/delete a recipe by recipe_id', async () => {
    try {
        const newRecipe = {
            title: 'New Test Recipe',
            description: 'Description for the new test recipe'
        };
        let res = await request(app).post('/').send(newRecipe);
        console.log('Create Response:', res.body);
        expect(res.statusCode).toBe(201);

        const recipeId = res.body.recipe_id;

        res = await request(app).get(`/${recipeId}`);
        console.log('Get Response:', res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toEqual(newRecipe.title);

        res = await request(app).delete(`/${recipeId}`);
        console.log('Delete Response:', res.body);
        expect(res.body).toEqual({ message: 'Recipe deleted' });
    } catch (error) {
        console.error('Error in post/delete a recipe by recipe_id test:', error);
        throw error;
    }
});

// Increase Jest timeout if needed
jest.setTimeout(30000); // 30 seconds
