import { faker } from '@faker-js/faker';

/**
 * Class for creating fake data. Class fields act as counters for id.
 */
class FakeDataFactory {
  usersCount = 0;
  preferenceQuestionsCount = 0;
  userPreferencesCount = 0;
  userEventsCount = 0;
  userDeadlinesCount = 0;

  /**
   * Create a random user object for testing purposes.
   * @returns A random user object.
   */
  public randomUser() {
    this.usersCount++;
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(),
      created_at: faker.date.past({ years: 5 }),
    };
  }

  /**
   * Create a random survey question for testing purposes.
   * @returns A random preferences question object.
   */
  public randomPreferenceQuestion(question_text = faker.lorem.words(10)) {
    this.preferenceQuestionsCount++;
    return {
      id: faker.string.uuid(),
      question_text: question_text,
    };
  }

  /**
   * Create a random user preferences object (a user's response to a survey
   * question) for testing purposes.
   * @returns A random user preferences object.
   */
  public randomUserPreference(
    user_id = faker.string.uuid(),
    question_id = faker.string.uuid()
  ) {
    this.userPreferencesCount++;
    return {
      id: faker.string.uuid(),
      user_id: user_id,
      question_id: question_id,
      answer: faker.lorem.words(10),
    };
  }

  /**
   * Create a random user event for testing purposes.
   * @returns A random user event object.
   */
  public randomUserEvent(user_id = faker.string.uuid()) {
    const startTime = faker.date.soon({ days: 7 });
    this.userEventsCount++;
    return {
      id: faker.string.uuid(),
      user_id: user_id,
      title: faker.company.catchPhrase(),
      start_time: startTime,
      end_time: FakeDataFactory.addMinutes(startTime, faker.number.int(240)),
      description: faker.lorem.words(faker.number.int(256)),
      location_place: faker.location.streetAddress(),
      is_recurring: false,
      recurrence_pattern: null,
      recurrence_start_date: null,
      recurrence_end_date: null,
      is_generated: false,
      break_time: null,
      is_completed: false,
      created_at: Date.now(),
    };
  }

  /**
   * Create a random user deadline for testing purposes.
   * @returns A random user deadline object.
   */
  public randomUserDeadline(
    user_id = faker.string.uuid(),
    event_id = faker.string.uuid()
  ) {
    this.userDeadlinesCount++;
    return {
      id: faker.string.uuid(),
      user_id: user_id,
      event_id: event_id,
      title: faker.company.catchPhrase(),
      due_time: faker.date.soon({ days: 30 }),
      description: faker.lorem.words(faker.number.int(256)),
      priority: null,
      projected_duration: faker.number.int(999),
      created_at: Date.now(),
    };
  }

  /**
   * Create a random user event for testing purposes. The event is set to be recurring.
   * @returns A random user event object.
   */
  public randomRecurringUserEvent(user_id = faker.string.uuid()) {
    const event = this.randomUserEvent(user_id);
    event.is_recurring = true;
    return event;
  }

  // Source: https://stackoverflow.com/a/1214753
  /**
   * Adds `minutes` to `data` and returns the new Date.
   * @returns `date` + `minutes`
   */
  private static addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
  }
}

export default FakeDataFactory;