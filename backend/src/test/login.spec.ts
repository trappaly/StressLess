// Disclaimer: These tests are currently a work in progress.
// Unfortunately, due to an unforeseen error with Firebase authentication, these tests do not work at the moment.
// Therefore, to make up for these tests-in-progress, thorough documentation is given for these tests for future replication.

// This library is needed to obtain Vitest testing commands to set up the testing suite.
import { vi, describe, it, expect, beforeAll} from 'vitest';

// We import the remaining necessary imports, such as our app, prisma, and Firebase authentication commands.
import app from '../index';
import request from 'supertest';
import FakeDataFactory from './FakeDataFactory';
import prisma from '../config/prisma';
import { User, UserDeadline, UserEvent } from '../db/types.ts';
import { faker } from '@faker-js/faker';
import { auth } from '../config/firebaseAdmin.ts';

// This chunk of code uses Vitest's vi.mock() to mock the
// firebaseAdmin.ts module in the tests below.
vi.mock('../config/firebaseAdmin.ts', () => {
  return {
    auth: {
      // This function mocks the verifyIdToken method, used to check the validity of a Firebase token.
      verifyIdToken: vi.fn(),
    },
  }
})


describe('Auth Routes', () => {
  // The following lines of code generate fake data needed to create the tests.
  
  // Declares the fake data factory used in the testing suite.
  let factory: FakeDataFactory;

  // Declares a user object but does not assign anything to it.
  let user: User;

  // Creates a fake user.
  let dbUser: any;

  // Creates a fake token.
  const mockIdToken = 'fake-id-token'


  beforeAll(async () => {
    
    factory = new FakeDataFactory;
    
    // Create random user, NOT stored in database.
    user = factory.randomUser();

    // Create a random user stored in the database.
    dbUser = await prisma.users.create({
    data: {
        // These are the required fields needed for a user.
        id: user.id,
        email: user.email,
        created_at: user.created_at,
    }
    });

    // Mock the Firebase token verification to return dbUser.
    (auth.verifyIdToken as any).mockResolvedValue(dbUser);

  })

  // This is the main sign up test, which saves the username in the backend upon signing up.
  it('should save username in backend on signup', async () => {
    const res = await request(app)
    // We test the sign-up route, which is a POST route.
    .post('/signup')
    // To perform this test, we send the Firebase token to the backend.
    .send({ idToken: mockIdToken })
    // If the test works, we should get a successful status (201).
    expect(res.status).toBe(201)
    // Our test should also successfully receive the id associated with the test user (dbUser).
    expect(res.body.users).toHaveProperty('id', dbUser.id)

    // Identify the test user by retrieving them by their id.
    const userInDb = await prisma.users.findUnique({ where: { id: dbUser.id } })
    // Make sure that the test user is not null.
    expect(userInDb).not.toBeNull()
    // Ensure that the test user has an email.
    expect(userInDb?.email).toBe(dbUser.email)
  })

  // This is the main test for the sign in route, which currently does not work.
  it('should reflect that the user exists in backend after login', async () => {
    // We want to register a user in the system, using the sign up POST request.
    // This sets us up to sign in the test user.
    await request(app).post('/signup').send(dbUser)

    const res = await request(app)
      // This is the part where we actually try and test the POST sign in route.
      .post('/signin')
      // As part of our test, we send in the test user.
      .send(dbUser)

    // If the test is successful, we would expect a success message.
    expect(res.status).toBe(200)
  })
})
