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
    // TODO: sort deadlines by priority

    for (const remainder of deadlineRemainders) {
      const {deadline, unscheduledMinutes} = remainder;
      let minutesLeft = unscheduledMinutes;

      // skip fully scheduled events
      if (minutesLeft <= 0) {
        continue;
      }

      let currentSearchedTime = new Date();
      findTimesLoop: while (minutesLeft > 0) {

        let freeBlock: { time: Date, minutes: number } | null;

        // Search for the day with next free time block
        do {
          // Get the next time block
          freeBlock = this.nextFreeTimeBlock([...events, ...scheduledEvents], userPreferences, currentSearchedTime);

          // when free block not found, find next day
          if (!freeBlock) {
            // move current time to start of next time block
            const workTimeStart = UserPreferenceUtils.minuteNumberToHourAndMinute(userPreferences.startTime);
            currentSearchedTime.setDate(currentSearchedTime.getDate() + 1);
            currentSearchedTime.setHours(workTimeStart[0]);
            currentSearchedTime.setMinutes(workTimeStart[1]);

            // if free block search occurs after deadline, stop searching
            if (deadline.due_time != null && currentSearchedTime > deadline.due_time) {
              // break out of the while loop called `findTimesLoop`
              break findTimesLoop;
            }
          }

          // if free block ends after deadline
          if (
            freeBlock &&
            deadline.due_time != null &&
            new Date(freeBlock.time.getTime() + freeBlock.minutes * 60000) > deadline.due_time
          ) {
            // if free block starts after deadline, stop searching
            if (freeBlock.time > deadline.due_time) {
              break findTimesLoop;
            } else {
              // if free block starts before deadline and ends after deadline,
              // adjust length of free block so it ends before deadline.
              freeBlock.minutes = Math.floor((deadline.due_time.getTime() - freeBlock.time.getTime()) / 60000);
            }
          }
        } while (!freeBlock);

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
        currentSearchedTime = new Date(newEvent.end_time!.getTime() + 60000); // +1 min buffer
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
  private static getEventsByDeadlineId(events: UserEvent[], deadlineId: string): UserEvent[] {
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
      let totalEventsDurationForADeadline = 0;

      // search for events with the deadline_id
      const eventsFound = Scheduler.getEventsByDeadlineId(events, deadlineId);

      // for each event found, make sure it has an end_time
      // then calculate the duration and add it to total duration
      for (const event of eventsFound) {
        if (!event.end_time) {
          console.warn("This event does not have end time, eventId: " + event.id);
          continue;
        }
        // Calculate elapsed time in milliseconds
        const timeElapsedMs = event.end_time.getTime() - event.start_time.getTime();
        // Convert from ms to minute
        const timeElapsedMin = timeElapsedMs / 60000;

        totalEventsDurationForADeadline += timeElapsedMin;
      }

      // calculate minutes left for a deadline and add it to the result
      const unscheduledMinutes = deadline.projected_duration - totalEventsDurationForADeadline;
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

    const dayEnd = userPreferences.endTime;
    const minIncrement = 5;

    for (
      let checkTime = new Date(startSearchTime);
      UserPreferenceUtils.dateToMinuteNumber(checkTime) <= dayEnd;
      checkTime = new Date(checkTime.getTime() + minIncrement * 60000)
    ) {
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
      currentMinutes <= userPreferences.endTime;

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
        (event.start_time != undefined && event.end_time != undefined) &&
        (event.start_time <= time && event.end_time > time)
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
          event.start_time < new Date(time.getDate() + 1) &&
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