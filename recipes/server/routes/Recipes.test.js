const express = require('express');
const request = require('supertest');
const router = require('./Recipes');

const app = new express();
app.use('/', router);

// currently this test uses the default data in recipes.json
// so make sure to update the test if the default data changes
test('get all recipes', async() => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    // change this if needed
    expect(res.body).toHaveLength(8)
})