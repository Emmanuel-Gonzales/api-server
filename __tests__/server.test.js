'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models/index');

const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll( () => {
  sequelizeDatabase.drop();
});

describe('Test routes', () => {

  test('testing POST', async () => {
    let response = await request.post('/food').send({
      name: 'apple',
      calories: 95,
      group: 'fruit',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('apple');
  });

  test('testing GET all', async () => {
    let response = await request.get('/food');

    expect(response.body[0].name).toEqual('apple');
    expect(response.body[0].calories).toEqual(95);
    expect(response.body[0].group).toEqual('fruit');
  });

  test('testing GET one', async () => {
    let response = await request.get('/food/1');

    expect(response.body.name).toEqual('apple');
    expect(response.body.calories).toEqual(95);
    expect(response.body.group).toEqual('fruit');
  });

  test('testing PUT', async () => {
    let response = await request.put('/food/1').send({
      name: 'NewApple',
      calories: 95,
      group: 'fruit',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('NewApple');
  });

  test('testing DELETE', async () => {
    let response = await request.delete('/food/1');

    expect(response.status).toEqual(200);
  });

  test('404 error', async () => {
    const res = await request.get('/notGood');
    expect(res.status).toEqual(404);
  });
});