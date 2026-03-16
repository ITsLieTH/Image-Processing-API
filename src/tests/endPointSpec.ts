import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint', () => {
  it('gets the api endpoint', async () => {
    const response = await request
      .get('/api/images')
      .query({ filename: 'fjord', width: 100, height: 100 });
    expect(response.status).toBe(200);
  });
});
