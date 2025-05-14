import { vi, describe, it, expect, beforeAll, afterAll } from 'vitest';
import app from '../index';
import request from 'supertest';
import FakeDataFactory from './FakeDataFactory';
import prisma from '../config/prisma';
import { User, UserDeadline, UserEvent } from '../db/types.ts';
import { faker } from '@faker-js/faker';
import { auth } from '../config/firebaseAdmin.ts';

vi.mock('../config/firebaseAdmin.ts', () => {
  return {
    auth: {
      verifyIdToken: vi.fn(),
      mockResolvedValue: vi.fn(),
    },
  }
})


describe('Auth Routes', () => {
  // generate fake data
  let factory: FakeDataFactory;
  // declares a user object but does not assign anything to it
  let user: User;

  // create a fake user
  let dbUser: any;

  // create a fake token
  const mockIdToken = 'fake-id-token'
  
  beforeAll(async () => {
    
    factory = new FakeDataFactory;
    
    // Create random user, NOT stored in database
    user = factory.randomUser();

    // Create a random user stored in the database
    dbUser = await prisma.users.create({
    data: {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
    }
    });

    // mock the Firebase token verification to return dbUser
    auth.verifyIdToken(mockIdToken)

  })

  it('should save username in backend on signup', async () => {
    const res = await request(app)
    .post('/signup')
    .send({ idToken: mockIdToken })
    expect(res.status).toBe(201)
    expect(res.body.users).toHaveProperty('id', dbUser.id)

    const userInDb = await prisma.users.findUnique({ where: { id: dbUser.id } })
    expect(userInDb).not.toBeNull()
    expect(userInDb?.email).toBe(dbUser.email)



    // const res = await request(app)
    //   .post('/signup')
    //   .send(dbUser)

    // expect(res.status).toBe(201)

    // const user = await getUserByUsername(testUser.username)
    // expect(user).not.toBeNull()
    // expect(user.username).toBe(testUser.username)
  })

//   it('should reflect that the user exists in backend after login', async () => {
//     await request(app).post('/signup').send(dbUser)

//     const res = await request(app)
//       .post('/signin')
//       .send(dbUser)

//     expect(res.status).toBe(200) // or whatever your login returns

//     const user = await getUserByUsername(dbUser.username)
//     expect(user).not.toBeNull()
//     expect(user.username).toBe(dbUser.username)
//   })
})
