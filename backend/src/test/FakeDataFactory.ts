import { faker } from '@faker-js/faker';
import { PreferenceQuestion, User, UserDeadline, UserEvent, UserPreference } from '../db/types.ts';

interface FakeDataFactoryOptions {
  id?: boolean | string;
  userId?: string;
  questionId?: string;
  eventId?: string;
  deadlineId?: string;
}

/**
 * Class for creating fake data. Class fields act as counters for id.
 */
class FakeDataFactory {
  usersCount = 0;
  preferenceQuestionsCount = 0;
  userPreferencesCount = 0;
  userEventsCount = 0;
  userDeadlinesCount = 0;

  defaultOptions = {
    id: true,
  };

  /**
   * Create a random user object for testing purposes.
   * @returns A random user object.
   */
  public randomUser(options: FakeDataFactoryOptions = this.defaultOptions) : User {
    this.usersCount++;
    return {
      id: faker.string.uuid(),
      email: faker.internet.email(),
      created_at: faker.date.past({ years: 5 })
    };
  }

  /**
   * Create a random survey question for testing purposes.
   * @returns A random preferences question object.
   */
  public randomPreferenceQuestion(options: FakeDataFactoryOptions = this.defaultOptions) : PreferenceQuestion {
    this.preferenceQuestionsCount++;
    return {
      id: faker.string.uuid(),
      question_text: faker.lorem.words(10),
    };
  }

  /**
   * Create a random user preferences object (a user's response to a survey
   * question) for testing purposes.
   * @returns A random user preferences object.
   */
  public randomUserPreference(options: FakeDataFactoryOptions = this.defaultOptions) : UserPreference {
    this.userPreferencesCount++;
    return {
      id: faker.string.uuid(),
      user_id: options.userId || faker.string.uuid(),
      question_id: options.questionId || faker.string.uuid(),
      answer: faker.lorem.words(10),
    };
  }

  /**
   * Create a random user event for testing purposes.
   * @returns A random user event object.
   */
  public randomUserEvent(options: FakeDataFactoryOptions = this.defaultOptions) : UserEvent {
    const startTime = faker.date.soon({ days: 7 });
    this.userEventsCount++;
    return {
      id: faker.string.uuid(),
      user_id: options.userId || faker.string.uuid(),
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
      // is_completed: false,
      created_at: new Date(),
      deadline_id: options.deadlineId || null,
    };
  }

  /**
   * Create a random user deadline for testing purposes.
   * @returns A random user deadline object.
   */
  public randomUserDeadline(options: FakeDataFactoryOptions = this.defaultOptions) : UserDeadline {
    this.userDeadlinesCount++;
    return {
      id: faker.string.uuid(),
      user_id: options.userId || faker.string.uuid(),
      event_id: options.eventId || null,
      title: faker.company.catchPhrase(),
      due_time: faker.date.soon({ days: 30 }),
      description: faker.lorem.words(faker.number.int(256)),
      priority: null,
      projected_duration: faker.number.int(999),
      created_at: new Date(),
    };
  }

  /**
   * Create a random user event for testing purposes. The event is set to be recurring.
   * @returns A random user event object.
   */
  public randomRecurringUserEvent(options: FakeDataFactoryOptions = this.defaultOptions) : UserEvent {
    const event = this.randomUserEvent(options);
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

  /**
   * Return the specified id, generates an id, or returns undefined
   */
  // private generateId(id?: boolean | string): string | undefined {
  //   if (id === true) {
  //     return faker.string.uuid();
  //   } else if (typeof id === 'string') {
  //     return id;
  //   } else {
  //     return undefined;
  //   }
  // }
}

export default FakeDataFactory;