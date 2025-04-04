import { faker } from '@faker-js/faker';

/**
 * Create a random user object for testing purposes.
 * @returns A random user object.
 */
export function randomUser() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    created_at: faker.date.past({ years: 5 }),
  };
}

/**
 * Create a random user preferences object (a user's response to a survey
 * question) for testing purposes.
 * @returns A random user preferences object.
 */
export function randomUserPreferences(
  user_id = faker.string.uuid(),
  question_id = faker.string.uuid()
) {
  return {
    id: faker.string.uuid(),
    user_id: user_id,
    question_id: question_id,
    answer: faker.lorem.words(10),
  };
}

/**
 * Create a random survey question for testing purposes.
 * @returns A random preferences question object.
 */
export function randomPreferenceQuestion(
  question_text = faker.lorem.words(10)
) {
  return {
    id: faker.string.uuid(),
    question_text: question_text,
  };
}

/**
 * Create a random user deadline for testing purposes. 
 * @returns A random user deadline object.
 */
export function randomUserDeadline(
  user_id = faker.string.uuid(),
  event_id = faker.string.uuid()
) {
  return {
    id: faker.string.uuid(),
    user_id: user_id,
    event_id: event_id,
    title: faker.company.catchPhrase(),
    due_time: faker.date.soon({ days: 30 }),
    description: faker.lorem.words(10),
    priority: 'low',
    projected_duration: faker.number.int(999),
    is_completed: false,
    created_at: faker.date.recent({ days: 7 }),
  };
}

/**
 * Create a random user event for testing purposes. 
 * @returns A random user event object.
 */
export function randomUserEvent(user_id = faker.string.uuid()) {
  const startTime = faker.date.soon({ days: 7 });
  return {
    id: faker.string.uuid(),
    user_id: user_id,
    title: faker.company.catchPhrase(),
    start_time: startTime,
    end_time: addMinutes(startTime, faker.number.int(240)),
    description: faker.lorem.words(10),
    location: faker.location.streetAddress(),
    priority: 'low',
    is_recurring: false,
    recurrence_pattern: '',
    recurrence_start_date: startTime,
    recurrence_end_date: faker.date.soon({ days: 90, refDate: startTime }),
    is_generated: false,
    break_time: 0,
    is_completed: false,
    created_at: faker.date.recent({ days: 7 }),
  };
}

/**
 * Create a random user event for testing purposes. The event is set to be recurring.
 * @returns A random user event object.
 */
export function randomRecurringUserEvent(user_id = faker.string.uuid()) {
  const event = randomUserEvent(user_id);
  event.is_recurring = true;
  return event;
}

// Source: https://stackoverflow.com/a/1214753
/**
 * Adds `minutes` to `data` and returns the new Date.
 * @returns `date` + `minutes`
 */
function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000);
}
