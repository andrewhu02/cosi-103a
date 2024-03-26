const express = require('express');
const request = require('supertest');
const router = require('./Recipes');

const app = express();
app.use('/', router);

// Mocking external services using Jest
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
    add_item: jest.fn((container, newRecipe) => {
        const mockRecipes = [
            { recipe_id: 1, title: 'Mocked Recipe 1', description: 'Mocked description 1' },
            { recipe_id: 2, title: 'Mocked Recipe 2', description: 'Mocked description 2' }
        ];
        // Generate a unique recipe_id
        const recipeId = mockRecipes.length + 1;
        const recipe = { recipe_id: recipeId, ...newRecipe };
        mockRecipes.push(recipe);
        return Promise.resolve(recipe);
    }),
    delete_by_recipe_id: jest.fn((container, recipeId) => {
        const mockRecipes = [
            { recipe_id: 1, title: 'Mocked Recipe 1', description: 'Mocked description 1' },
            { recipe_id: 2, title: 'Mocked Recipe 2', description: 'Mocked description 2' }
        ];
        const index = mockRecipes.findIndex(recipe => recipe.recipe_id === recipeId);
        if (index !== -1) {
            mockRecipes.splice(index, 1);
        }
        return Promise.resolve({ message: 'Recipe deleted' });
    })
}));

// Test cases
describe('Recipe API Tests', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Reset mocked functions between tests
    });

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

    // test('post/delete a recipe by recipe_id', async () => {
    //     const newRecipe = {
    //         title: 'New Test Recipe',
    //         description: 'Description for the new test recipe'
    //     };
    //     let res = await request(app).post('/').send(newRecipe);
    //     expect(res.statusCode).toBe(201);

    //     const recipeId = res.body.recipe_id;

    //     res = await request(app).get(`/${recipeId}`);
    //     expect(res.statusCode).toBe(200);
    //     expect(res.body.title).toEqual(newRecipe.title);

    //     res = await request(app).delete(`/${recipeId}`);
    //     expect(res.body).toEqual({ message: 'Recipe deleted' });
    // });
});

// Increase Jest timeout if needed
jest.setTimeout(30000); // 30 seconds
