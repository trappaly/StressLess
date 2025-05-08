import UserPreferenceUtils from "./UserPreferenceUtils";
import { UserDeadline, UserEvent, UserPreferences } from '../db/types.ts';
import * as crypto from 'node:crypto';
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
    const scheduledEvents: UserEvent[] = [];
    const deadlineRemainders = this.calculateDeadlineRemainders(events, deadlines);

    for (const remainder of deadlineRemainders) {
      const {deadline, unscheduledMinutes} = remainder;
      let minutesLeft = unscheduledMinutes;

      // skip fully scheduled events
      if (minutesLeft <= 0) {
        continue;
      }

      let currentTime = new Date();
      while (minutesLeft > 0) {
        const freeBlock = this.nextFreeTimeBlock([...events, ...scheduledEvents], userPreferences, currentTime);

        // No available block left today
        if (!freeBlock) break;

        const scheduleMinutes = Math.min(freeBlock.minutes, minutesLeft);

        // Create a new event
        const newEvent : UserEvent = {
          id: crypto.randomUUID().toString(),
          user_id: deadline.user_id,
          title: `Work on ${deadline.title}`,
          start_time: freeBlock.time,
          end_time: new Date(freeBlock.time.getTime() + scheduleMinutes * 60000),
          deadline_id: deadline.id,
          description: null,
          created_at: new Date(),
          location_place: null,
          is_recurring: false,
          is_generated: true,
          recurrence_pattern: '',
          recurrence_end_date: null,
          recurrence_start_date: null,
          break_time: null,
        };

        scheduledEvents.push(newEvent);
        minutesLeft -= scheduleMinutes;

        // Move search forward
        // TODO: end_time might be null
        currentTime = new Date(newEvent.end_time!.getTime() + 60000); // +1 min buffer
      }
      // Update unscheduledMinutes in remainder
      remainder.unscheduledMinutes = minutesLeft;
    }

    // Only return deadlines that still need scheduling
    const unscheduledDeadlines = deadlineRemainders.filter(d => d.unscheduledMinutes > 0);

    return {
      scheduledEvents,
      unscheduledDeadlines,
    };
  }

  /**
   * Helper method that search an array of events, return an array of event that match deadlineId
   *  and has an end_time
   * @param events An array of all event objects for a user.
   * @param deadlineId A deadline_id to match to event
   * @private
   */
  private static getEventByDeadlineId(events: UserEvent[], deadlineId: string) {
    let res : UserEvent[] = [];
    for (const event of events) {
      if (!event.end_time) {
        console.warn("This event does not have end time, eventId: " + event.id);
        continue;
      }

      if (event.deadline_id === deadlineId) {
        res.push(event);
      }
    }
    return res;
  }

  /**
   * Calculates the remaining hours left for each deadline.
   * @param events An array of all event objects for a user.
   * @param deadlines An array of all deadline objects for a user.
   * @returns An array of deadline remainders, the deadline and the unscheduled minutes.
   */
  static calculateDeadlineRemainders(
    events: UserEvent[],
    deadlines: UserDeadline[]
  ): DeadlineRemainder[] {
    let res : DeadlineRemainder[] = [];

    // process each deadline and find its remaining unscheduled minutes
    for (const deadline of deadlines) {
      if (!deadline.projected_duration) {
        console.warn("No projected duration for deadline: ", deadline.id);
        continue;
      }
      const deadlineId = deadline.id;
      let total_events_duration_for_a_deadline = 0;

      // search for events with the deadline_id
      const eventsFound = Scheduler.getEventByDeadlineId(events, deadlineId);

      // for each event found, make sure it has an end_time
      // then calculate the duration and add it to total duration
      for (const event of eventsFound) {
        if (!event.end_time) {
          console.warn("This event does not have end time, eventId: " + event.id);
          continue;
        }
        total_events_duration_for_a_deadline += UserPreferenceUtils.dateToMinuteNumber(event.end_time) - UserPreferenceUtils.dateToMinuteNumber(event.start_time);
      }

      // calculate minutes left for a deadline and add it to the result
      const unscheduledMinutes = deadline.projected_duration - total_events_duration_for_a_deadline;
      res.push({
        deadline:deadline,
        unscheduledMinutes:unscheduledMinutes,
      });
    }
    return res;
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
    startSearchTime: Date = new Date(Date.now())
  ): { time: Date; minutes: number } | null {
    let checkTime = new Date(startSearchTime);

    const dayEnd = userPreferences.endTime;
    const minIncrement = 5;

    while (UserPreferenceUtils.dateToMinuteNumber(checkTime) <= dayEnd) {
      if (this.timeIsFree(events, userPreferences, startSearchTime)) {
        const availableMinutes = this.minutesToNextEvent(
          events,
          userPreferences,
          checkTime
        );
        return {
          time: checkTime,
          minutes: Math.min(availableMinutes, userPreferences.workDuration),
        };
      }

      checkTime = new Date(checkTime.getTime() + minIncrement * 60000);
    }

    return null;
  }

  /**
   * Check if current time is free. Returns true if time is free.
   */
  private static timeIsFree(
    events: UserEvent[],
    userPreferences: UserPreferences,
    time: Date = new Date(Date.now())
  ): boolean {
    // checks whether the current time is within work hours
    const currentMinutes = UserPreferenceUtils.dateToMinuteNumber(time);
    const isWithinWorkHours =
      currentMinutes >= userPreferences.startTime &&
      currentMinutes + userPreferences.workDuration <= userPreferences.endTime;

    if (!isWithinWorkHours) return false;

    // checks whether any events overlap at the current time
    const hasConflict = this.eventsAtTime(events, time).length > 0;

    // Current time is free when there's no event at this time
    return !hasConflict;
  }

  /**
   * Returns all events occurring at a given time.
   */
  private static eventsAtTime(
    events: UserEvent[],
    time: Date = new Date(Date.now())
  ): UserEvent[] {
    return events.filter(
      (event) =>
        event &&
        (event.start_time == undefined ||
          event.end_time == undefined ||
          (event.start_time <= time && event.end_time > time))
    );
  }

  /**
   * Return the duration until the next event, or end of work day, in minutes,
   * from the given time.
   */
  private static minutesToNextEvent(
    events: UserEvent[],
    userPreferences: UserPreferences,
    time: Date = new Date(Date.now())
  ): number {
    // Filter events that start after given time and before end of work day
    const currentMinutes = UserPreferenceUtils.dateToMinuteNumber(time);
    const dayEnd = userPreferences.endTime;
    const futureEvents = events
      .filter(
        (event) =>
          event &&
          event.start_time >= time &&
          UserPreferenceUtils.dateToMinuteNumber(event.start_time) <
            userPreferences.endTime
      )
      .sort(
        (a, b) =>
          UserPreferenceUtils.dateToMinuteNumber(a.start_time) -
          UserPreferenceUtils.dateToMinuteNumber(b.start_time)
      );

    if (futureEvents.length > 0) {
      return (
        UserPreferenceUtils.dateToMinuteNumber(futureEvents[0].start_time) -
        currentMinutes
      );
    }

    return dayEnd - currentMinutes;
  }
}