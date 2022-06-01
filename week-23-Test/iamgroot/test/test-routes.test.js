'use strict';

const request = require('supertest');
const app = require('../routes');

​test('GET /groot', (done) => {
  request(app)
      .get('/groot?message=hello')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, response) => {
          expect(response.text).toBe('{"received":"hello","translated":"I am Groot!"}');
          done();
      });
});