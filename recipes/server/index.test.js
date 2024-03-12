const app = require('./index.js');
const request = require('supertest');

// TODO: server doesn't stop after tests are over

// test that it serves react frontend
// TODO: this test checks the index.html file 
// which might not be a best practice
it('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=UTF-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Web site created using create-react-app/);
});

// no need to test any react routing/elements since that is all tested elsewhere

// ================ testing API ==================

// test using GET to get the list of all recipes

// test using POST request to add a new recipe to the list

// test DELETE a recipe by ID