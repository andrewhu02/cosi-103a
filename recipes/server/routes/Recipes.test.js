const express = require('express');
const request = require('supertest');
const router = require('./Recipes');

const app = new express();
app.use('/', router);

// currently these tests use the default data in recipes.json
// so make sure to update them if the default data changes

test('get all recipes', async() => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    // change this if needed
    expect(res.body).toHaveLength(8)
})

test('get recipe by ID', async() => {
    const res = await request(app).get('/1');
    expect(res.statusCode).toBe(200);
    // change this if needed
    expect(res.body.id).toEqual(1);
})

test('post a recipe by ID', async() => {
    const recipe = {
        "title": "test recipe",
        "description": "this is a description of the recipe"
    }
    const res = await request(app).post('/').send(recipe);
    expect(res.statusCode).toBe(201);
    // watch out for this, recipe ID is set automatically
    // based on length of current array of recipes
    expRec = await request(app).get('/9');
    expect(expRec.body.title).toEqual("test recipe");
})