const express = require('express');
const request = require('supertest');
const recipeRouter = require('./Recipes');
const reactRouter = require('./ReactApp');

const app = express();
app.use('/', recipeRouter);
app.use('/', reactRouter);



describe('checking rendering',()=>{
    //check home page
    it('check home page',async ()=>{
        const resp = await request(app).get('/homepage')
        expect(resp.statusCode).toBe(200)
        expect(resp.headers['content-type']).toEqual('text/html; charset=UTF-8');
        
    })
    //check recipe page
    it('check recipe page', async()=>{
        const resp = await request(app).get('/add-new-recipe')
        expect(resp.statusCode).toBe(200)
        expect(resp.headers['content-type']).toEqual('text/html; charset=UTF-8');
    })
    //check add recipe page
    it('check add recipe page',async ()=>{
        resp = await request(app).get('/all-recipes')
        expect(resp.statusCode).toBe(200)
        expect(resp.headers['content-type']).toEqual('text/html; charset=UTF-8');
    })
    //
})