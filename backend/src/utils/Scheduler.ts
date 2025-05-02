import UserPreferences from "./UserPreferences";
import { Prisma } from "@prisma/client";

/**
 * An object containing a deadline object as well as the number of unscheduled minutes.
 */
type DeadlineRemainder = {
  deadline: Prisma.user_deadlinesCreateInput,
  unscheduledMinutes: number,
}

/**
 * The output of the scheduler.
 * 
 * `scheduledEvents` is an array of events needed to finish a deadline.
 * 
 * `unscheduledDeadlines` is an array of deadlines that are not fully scheduled.
 * `unscheduledDeadlines` is an array  contain the number of hours that remain unscheduled,
 * in addition to all fields of a deadline object.
 */
type SchedulerOutput = {
  scheduledEvents: Prisma.user_eventsCreateInput[],
  unscheduledDeadlines: DeadlineRemainder[],
}

export default class Scheduler {
  /**
   * Creates a schedule for all deadlines for a single user by returning the
   * events scheduled so that the user can complete all deadlines without conflict.
   * 
   * @param events An array of all event objects for a user.
   * @param deadlines An array of all deadline objects for a user.
   * @param userPreferences An object containing user preferences.
   * @returns A SchedulerOutput object.
   */
  static scheduleDeadlines(
    events: Prisma.user_eventsCreateInput[],
    deadlines: Prisma.user_deadlinesCreateInput[],
    userPreferences: UserPreferences
  ): SchedulerOutput {
    return {
      scheduledEvents: [],
      unscheduledDeadlines: [],
    };
  }

  /**
   * Calculates the remaining hours left for each deadline.
   * @param events An array of all event objects for a user.
   * @param deadlines An array of all deadline objects for a user.
   * @returns An array of deadline remainders, the deadline and the unscheduled minutes.
   */
  static calculateDeadlineRemainders(
    events: Prisma.user_eventsCreateInput[],
    deadlines: Prisma.user_deadlinesCreateInput[],
  ): DeadlineRemainder[] {
    return [];
  }

  /**
   * Returns the next free time block where a user is available for working.
   * Search bounded by end of work day.
   * 
   * @param events An array of all event objects for a user.
   * @param userPreferences The user preferences.
   * @param startSearchTime The start time for searching the next free time block.
   * @returns an object containing the time and date for the next free time block;
   *  Returns 
   */
  static nextFreeTimeBlock(
    events: Prisma.user_eventsCreateInput[],
    userPreferences: UserPreferences,
    startSearchTime: Date = new Date(Date.now()),
  ): { time: Date, minutes: number } | null {
    // Determine if current time is free
    const startTimeIsFree = this.timeIsFree(events, userPreferences, startSearchTime); 
    if (startTimeIsFree) {
      // If start time is free, then check how soon until next event.
      const availableMinutes = this.minutesToNextEvent(events, userPreferences, startSearchTime);
      return {
        time: startSearchTime,
        minutes: availableMinutes < userPreferences.workDuration ? availableMinutes : userPreferences.workDuration,
      };
    } else {
      // Otherwise, check when is the next time block.
    }
    return null;
  }

  /**
   * Check if current time is free.
   */
  private static timeIsFree(
    events: Prisma.user_eventsCreateInput[],
    userPreferences: UserPreferences,
    time: Date = new Date(Date.now()),
  ): boolean {
    return true;
  }

  /**
   * Return the duration until the next event, or end of work day, in minutes,
   * from the given time.
   */
  private static minutesToNextEvent(
    events: Prisma.user_eventsCreateInput[],
    userPreferences: UserPreferences,
    time: Date = new Date(Date.now()),
  ): number {
    return 0;
  }
}