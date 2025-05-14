import { describe, it, expect, beforeAll } from 'vitest';
import FakeDataFactory from './FakeDataFactory';
import Scheduler from '../utils/Scheduler';
import { PreferenceQuestion, User, UserDeadline, UserEvent, UserPreference } from '../db/types.ts';
import { faker } from '@faker-js/faker';

/*
* Test to test the calculate deadline remainders function 
*/

describe("calculate deadline remainders with specific data", () => {
    // Declares types of variables
    let factory: FakeDataFactory;
    let user: User;
    let userEvents: UserEvent[] = [];
    let userDeadlines: UserDeadline[] = [];
    let userPreferences: UserPreference[] = [];

    // Initializes all of the variables before the test
    beforeAll(() => {
        factory = new FakeDataFactory();
        user = factory.randomUser();
        userEvents = [
            {
                id: "event1",
                user_id: user.id,
                title: "Event 1",
                start_time: new Date("2025-05-15T09:00:00"),
                end_time: new Date("2025-05-15T11:00:00"),
                description: "CS Class",
                location_place: "Noyce",
                is_recurring: false,
                recurrence_pattern: null,
                recurrence_start_date: null,
                recurrence_end_date: null,
                is_generated: false,
                break_time: "00:15",
                created_at: new Date(),
                deadline_id: "class",
            },
            {
                id: "Tennis practce",
                user_id: user.id,
                title: "Tennis practice",
                start_time: new Date("2025-05-15T14:00:00"),
                end_time: new Date("2025-05-15T16:00:00"),
                description: "Tennis practice",
                location_place: "Tennis Courts",
                is_recurring: false,
                recurrence_pattern: null,
                recurrence_start_date: null,
                recurrence_end_date: null,
                is_generated: false,
                break_time: "00:10",
                created_at: new Date(),
                deadline_id: "tennis",
            }
        ];

        userDeadlines = [
            {
                id: "test",
                user_id: user.id,
                event_id: "test",
                title: "test",
                due_time: new Date("2025-05-15T12:00:00"),
                description: "Test",
                priority: "High",
                projected_duration: 60, // 1 hour
                created_at: new Date(),
            },
            {
                id: "essay",
                user_id: user.id,
                event_id: "essay",
                title: "essay",
                due_time: new Date("2025-05-15T18:00:00"),
                description: "essay",
                priority: "Medium",
                projected_duration: 120, // 2 hours
                created_at: new Date(),
            }
        ];
  
        userPreferences = [
            {
                id: "pref",
                user_id: user.id,
                question_id: "question",
                answer: "answer",
            }
        ];
    });
  // Testing for a regular unscheduled minutes 
    it("regular test case to schedule unscheduled minutes", () => {
        userEvents.forEach((event) => {
            const deadline = userDeadlines.find(d => d.id === event.deadline_id);
            // Makes sure deadline, end time, and start times found
            if (deadline && event.end_time && event.start_time) {
                const result = Scheduler.calculateDeadlineRemainders([event], [deadline]);
    
                // Expected scheduled duration in minutes
                const scheduledDuration = (event.end_time.getTime() - event.start_time.getTime()) / 60000;
    
                // Declare outside the if-block
                let expectedUnscheduled = 0;

                // Checks to make sure deadline isn't null and if it's not null then subtract the total amount scheduled minutes away from the unscheduled minutes
                if (deadline.projected_duration != null) {
                    expectedUnscheduled = deadline.projected_duration - scheduledDuration;
                }
                // Checks to make sure the test passes
                expect(result[0].unscheduledMinutes).toBeCloseTo(expectedUnscheduled, 1);
            } 
            // throws an error otherwise 
            else {
                console.error(`Missing data for event: ${event.id}`);
            }
        });
    });
});


  
  
