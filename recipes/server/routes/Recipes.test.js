const express = require('express');
const request = require('supertest');
const router = require('./Recipes');

const app = new express();
app.use('/', router);

// currently these tests use the production database
// so that probably needs to be changed

test('get all recipes', async() => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    // change this if needed
    expect((res.body.length) > 1).toBe(true);
})

test('get recipe by ID', async() => {
    const res = await request(app).get('/1');
    expect(res.statusCode).toBe(200);
    // the request returns an array with one item in it
    recipes = res.body;
    expect(recipes[0].recipe_id).toEqual(1);
})

test('post/delete a recipe by recipe_id', async() => {
    const recipe = {
        "title": "test recipe",
        "description": "this is a description of the recipe"
    }
    var res = await request(app).post('/').send(recipe);
    expect(res.statusCode).toBe(201);
    recipeId = res.body.recipe_id;
    res = await request(app).get('/' + recipeId);
    recipes = res.body
    expect(recipes[0].title).toEqual("test recipe");
    res = await request(app).delete('/' + recipeId);
    expect(res.body).toEqual({ "message": 'Recipe deleted' });
})