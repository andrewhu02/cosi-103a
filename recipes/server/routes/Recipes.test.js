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

test('post a recipe', async() => {
    const recipe = {
        "title": "test recipe",
        "description": "this is a description of the recipe"
    }
    var res = await request(app).post('/').send(recipe);
    expect(res.statusCode).toBe(201);
    // watch out for this, recipe ID is set automatically
    // based on length of current array of recipes
    res = await request(app).get('/9');
    expect(res.body.title).toEqual("test recipe");
})

test('delete a recipe by ID', async() => {
    var res = await request(app).get('/1');
    // verify that it didn't return 404, so recipe exists
    expect(res.statusCode).toBe(200);
    // delete recipe 1
    await request(app).delete("/1");
    // verify it was deleted, should get 404
    res = await request(app).get('/1');
    expect(res.statusCode).toBe(404);
})