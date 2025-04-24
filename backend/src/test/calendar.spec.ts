import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import app from '../index';
import request from 'supertest';
import FakeDataFactory from './FakeDataFactory';
import prisma from '../config/prisma';

describe('Test calendar routes', () => {
    // generate fake data
    let factory: FakeDataFactory;
    // declares a user object but does not assign anything to it
    let user: { id: any; email?: string; created_at?: Date; };
    // declares a user event object but does not assign anything to it
    let userEvent: { id: any; user_id: any; title: any; start_time: Date; is_recurring: any; is_generated: any; created_at: Date; };
    // declaring an array of events
    let userEvents: any[] = [];
  
    // before all the tests are run, run this chunk of code once
    beforeAll(() => {
        factory = new FakeDataFactory;
      
        // Create random user, NOT stored in database
        user = factory.randomUser({ id: "TEST_USER" });
  
        // Create random event, NOT stored in database
        userEvent = factory.randomUserEvent({ id: "TEST_USER_EVENT", userId: "TEST_USER" });

        // Create random events, NOT stored in database
        for (let i = 0; i < 10; i++) {
            userEvents.push(factory.randomUserEvent());
            }
        });
    
    
    // describe refers to a group of tests
    describe('Test getting events', async () => {
      let events;
      let dbEvents: any[];
  
      // add data to the database which lets us test the routes
      beforeAll(async () => {
        // Map generated user events to their user ID
        events = userEvents.map(event =>
          factory.randomUserEvent({
            id: false,
            userId: user.id,
          }));
        // Add events to database
        dbEvents = await prisma.user_events.createManyAndReturn({
            data: events,
          });
      });
  
      // Test getting the events through the route
      it('Gets the events', async () => {
        const res = await request(app).get(`/api/calendar/events/by-user/${user.id}`);
        expect(res.statusCode).toBe(200);
      });

      // Comment this out if you don't want things to delete
      // Delete answers when done
      afterAll(async () => {
        await prisma.user_events.deleteMany({
          where: {
            user_id: "TEST_USER",
          },
        });
      });

    });

        // describe refers to a group of tests
    describe('Test getting events', async () => {
      let events;
      let dbEvents: any[];
  
      // add data to the database which lets us test the routes
      beforeAll(async () => {
        // Map generated user events to their user ID
        events = userEvents.map(event =>
          factory.randomUserEvent({
            id: false,
            userId: user.id,
          }));
        // Add events to database
        dbEvents = await prisma.user_events.createManyAndReturn({
            data: events,
          });
      });
  
      // Test getting the events through the route
      it('Gets the events', async () => {
        const res = await request(app).get(`/api/calendar/events/by-user/${user.id}`);
        expect(res.statusCode).toBe(200);
      });

      // Comment this out if you don't want things to delete
      // Delete answers when done
      afterAll(async () => {
        await prisma.user_events.deleteMany({
          where: {
            user_id: "TEST_USER",
          },
        });
      });

    });

    // describe refers to a group of tests
    describe('Test getting an event by id', async () => {
        let dbEvent: any;
    
        // add data to the database which lets us test the routes
        beforeAll(async () => {
          // Add an event to database
          dbEvent = await prisma.user_events.create({
              data: {
                id: 'TEST_USER_EVENT',
                user_id: 'TEST_USER',
                title: 'TEST_TITLE'
              }
            });
        });
    
        // Test getting the event through its id using the route
        it('Gets the events', async () => {
          const res = await request(app).get(`/api/calendar/events/id/${userEvent.id}`);
          expect(res.statusCode).toBe(200);
        });
  
        // Comment this out if you don't want things to delete
        // Delete answers when done
        afterAll(async () => {
          await prisma.user_events.deleteMany({
            where: {
              id: "TEST_USER_EVENT",
            },
          });
        });
  
      });

//    // describe refers to a group of tests
//    describe('Test updating an event', async () => {
//     let dbEvent: any;

//     // add data to the database which lets us test the routes
//     beforeAll(async () => {
//       // Add an event to database
//       dbEvent = await prisma.user_events.create({
//           data: {
//             id: 'TEST_USER_EVENT',
//             user_id: 'TEST_USER',
//             title: 'TEST_TITLE'
//           }
//         });
//     });

//     // Test getting the event through its id using the route
//     it('Updates an event', async () => {
      
//       let testEvent;
//       testEvent = {
//         id: 'TEST_USER_EVENT',
//         // title: 'NEW_TEST_TITLE'
//       };
//       const res = await request(app)
//       .put(`/api/calendar/events/id/${userEvent.id}`)
//     //   .send([testEvent]);
//       expect(res.statusCode).toBe(200);
//     });

//     // Comment this out if you don't want things to delete
//     // Delete answers when done
//     // afterAll(async () => {
//     //   await prisma.user_events.deleteMany({
//     //     where: {
//     //       id: "TEST_USER_EVENT",
//     //     },
//     //   });
//     // });

//   });
  
  });