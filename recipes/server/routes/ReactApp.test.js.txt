const express = require('express');
const request = require('supertest');
const router = require('./ReactApp');

const app = new express();
app.use('/', router);

test('serves index.html for /', async() => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    // this text is hardcoded in index.html but will probably never change
    expect(res.text).toMatch(/Web site created using create-react-app/);
});

test('serves index.html for any other route', async() => {
    const res = await request(app).get('/recipe1');
    expect(res.statusCode).toBe(200);
    // this text is hardcoded in index.html but will probably never change
    expect(res.text).toMatch(/Web site created using create-react-app/);
});