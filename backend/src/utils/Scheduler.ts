import UserPreferenceUtils from "./UserPreferenceUtils";
import { UserDeadline, UserEvent, UserPreferences } from '../db/types.ts';

/**
 * An object containing a deadline object as well as the number of unscheduled minutes.
 */
type DeadlineRemainder = {
  deadline: UserDeadline,
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
 * 
 * TODO: Determine if `unscheduledDeadlines` contains deadlines that are fully scheduled
 */
type SchedulerOutput = {
  scheduledEvents: UserEvent[],
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
    events: UserEvent[],
    deadlines: UserDeadline[],
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
    events: UserEvent[],
    deadlines: UserDeadline[],
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
    events: UserEvent[],
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
   * Check if current time is free. Returns true if time is free.
   */
  private static timeIsFree(
    events: UserEvent[],
    userPreferences: UserPreferences,
    time: Date = new Date(Date.now()),
  ): boolean {
    // Current time is free when there's no event at this time
    return this.eventsAtTime(events, time).length === 0;
  }

  /**
   * Returns all events occurring at a given time.
   */
  private static eventsAtTime(
    events: UserEvent[],
    time: Date = new Date(Date.now()),
  ): UserEvent[] {
    return events.filter(event =>
      event &&
      (
        (event.start_time == undefined || event.end_time == undefined) ||
        (event.start_time <= time && event.end_time > time)
      )
    );
  }

  /**
   * Return the duration until the next event, or end of work day, in minutes,
   * from the given time.
   */
  private static minutesToNextEvent(
    events: UserEvent[],
    userPreferences: UserPreferences,
    time: Date = new Date(Date.now()),
  ): number {
    // Filter events that start after given time and before end of work day
    // TODO: Convert endTime to only hours and minutes?
    events.filter(event =>
      event &&
      (event.start_time >= time && UserPreferenceUtils.dateToMinuteNumber(event.start_time) < userPreferences.endTime)
    );
    // Then, sort events by start time.
    // Calculate minutes to next event, rounded down (to prevent conflicts).
    return 0;
  }
}