import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import app from '../index';
import request from 'supertest';
import FakeDataFactory from './FakeDataFactory';
import prisma from '../config/prisma';

describe('Test preference routes', () => {
  let factory: FakeDataFactory;
  let user: { id: any; email?: string; created_at?: Date; };
  let preferenceQuestions: any[] = [];

  beforeAll(() => {
    factory = new FakeDataFactory;
    
    // Create random user, NOT stored in database
    user = factory.randomUser({ id: "TEST_USER" });

    // Create random questions, NOT stored in database
    for (let i = 0; i < 10; i++) {
      preferenceQuestions.push(factory.randomPreferenceQuestion());
    }
  });
  

  describe('Test getting preference routes', async () => {
    let preferences;
    let dbPreferences: any[];

    beforeAll(async () => {
      // Add some answers to preference questions
      preferences = preferenceQuestions.map(question =>
        factory.randomUserPreference({
          id: false,
          userId: user.id,
          questionId: question.id,
        }));
      // Add answers to database
      dbPreferences = await prisma.user_preferences.createManyAndReturn({
        data: preferences,
      });
    });

    // Delete answers when done
    afterAll(async () => {
      await prisma.user_preferences.deleteMany({
        where: {
          user_id: "TEST_USER",
        },
      });
    });

    it('Gets the preferences', async () => {
      const res = await request(app).get(`/api/user/surveyresults/${user.id}`);
      expect(res.statusCode).toBe(200);
    });
  });

  // describe('Test posting preference routes', async () => {

  // });
});