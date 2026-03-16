import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the /api/images endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200',
    );
    expect(response.status).toBe(200);
  });

  it('returns 400 for missing parameters', async () => {
    const response = await request.get('/api/images?filename=fjord&height=200');
    expect(response.status).toBe(400);
  });
});
