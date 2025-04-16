import { describe, it, expect } from 'vitest';
import app from '../index';
import request from 'supertest';

describe('getUserEvents tests', () => {
  it('route exists', async () => {
    const res = await request(app).get('/api/calendar/events/by-user/PLACEHOLDER');
    expect(res.statusCode).toBe(200);
  });
});