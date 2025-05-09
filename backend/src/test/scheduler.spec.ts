import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import FakeDataFactory from './FakeDataFactory';
import Scheduler from '../utils/Scheduler';
import { faker } from '@faker-js/faker';


// test: get events by deadline ID 
describe ("get events by deadline ID"),() => {
    let factory: FakeDataFactory;
    let user_id: string;
    let deadline_id: string;
    beforeAll(() => {
        factory = new FakeDataFactory;
        user_id = "test-user";
       deadline_id = "test deadline"
    })
    it("returns matching event with valid end_time", () => {
        const event = {
          ...factory.randomUserEvent({ userId: user_id }),
          deadline_id,
          end_time: new Date(),
        }
 });
}



// test: calculateDeadlineRemainders
// describe ("calculate deadline remainders"), () => {
// //       // generate fake data
//     let factory: FakeDataFactory;
//     let user_id: string;
//     let event_id: string;
// beforeAll(() => {
//    factory = new FakeDataFactory;
//    user_id = "test-user";
//    event_id = "test deadline"
// })

//   });
// };
// //});

// // test: nextFreeTimeBlock
// describe("calculate next free time block"), () => {

// };

// // test: timeIsFree
// describe("time is free"), () => {

// };

// // test: EventsAtTime
// describe("events at a time"), () => {

// };

// // test: minutestoNextEvent
// describe("minutes to the next event"), () => {

// Schedule deadlines calls of the functions and tests it
