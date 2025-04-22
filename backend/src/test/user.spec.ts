import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import app from '../index';
import request from 'supertest';
import FakeDataFactory from './FakeDataFactory';
import prisma from '../config/prisma';

describe('Test preference routes', () => {
  // generate fake data
  let factory: FakeDataFactory;
  // declares a user object but does not assign anything to it
  let user: { id: any; email?: string; created_at?: Date; };
  // declares a preference object but does not assign anything to it
  let preference: { id: any; user_id: any; question_id: any; answer: string;};
  // declaring an array of preference questions
  let preferenceQuestions: any[] = [];

  // before all the tests are run, run this chunk of code once
  beforeAll(() => {
    factory = new FakeDataFactory;
    
    // Create random user, NOT stored in database
    user = factory.randomUser({ id: "TEST_USER" });

    // Create random preference, NOT stored in database
    preference = factory.randomUserPreference({ userId: "TEST_USER_PREFERENCE" });

    // Create random questions, NOT stored in database
    for (let i = 0; i < 10; i++) {
      preferenceQuestions.push(factory.randomPreferenceQuestion());
    }
  });
  
  // describe refers to a group of tests
  describe('Test getting preference routes', async () => {
    let preferences;
    let dbPreferences: any[];

    // add data to the database which lets us test the routes
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

    // Comment this out if you don't want things to delete
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

  describe('Test posting preference routes', async () => {
    beforeAll(async () => {
      let dbPreferenceQuestion: any;
      // Add a preference question to the database
      // This addition is necessary as postPreferences retrieves a preference through a question_text
      dbPreferenceQuestion = await prisma.preference_questions.create({
        data: {
          question_text: 'TEST_QUESTION_TEXT',
        },
      });
    });
    it('Saves survey results to the database', async () => {
      // defines testPreference
      let testPreference;
      testPreference = {
        // defining an existing instance of question_text is necessary as preference is retrieved by question_text
        question_text: 'TEST_QUESTION_TEXT',
      };
      const res = await request(app)
      .post(`/api/user/surveyresults/${preference.user_id}`)
      // send the test preference to the database
      .send([testPreference]);
      expect(res.statusCode).toBe(200);
    });
    afterAll(async () => {
      // Delete many user preferences
      await prisma.user_preferences.deleteMany({
        where: {
          user_id: 'TEST_USER_PREFERENCE',
        },
      });
    
      // Delete many preference questions
      await prisma.preference_questions.deleteMany({
        where: {
          question_text: 'TEST_QUESTION_TEXT',
        },
      });
    });
    
  });

});