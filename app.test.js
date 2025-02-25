const request = require('supertest');
const app = require('./app');

test('GET / returns Hello, World!', async () =>{
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, World!'); 
});
