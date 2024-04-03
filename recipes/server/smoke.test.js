const express = require('express');
const request = require('supertest');
const router = require('./Recipes');

const app = express();
app.use('/', router);

describe('checking rendering',()=>{
    //check home page
    it('check home page',()=>{

    })
    //check recipe page
    it('check recipe page',()=>{

    })
    //check add recipe page
    it('check add recipe page',()=>{

    })
    //
})