import UserPreferences from "./UserPreferences";
import { Prisma } from "@prisma/client";

/**
 * The output of the scheduler.
 * 
 * scheduledEvents is an array of events needed to finish a deadline.
 * 
 * unscheduledDeadlines is an array of deadlines that are not fully scheduled.
 * unscheduledDeadlines will contain the number of hours that remain unscheduled,
 * in addition to all fields of a deadline object.
 */
type SchedulerOutput =  {
  scheduledEvents: Prisma.user_eventsCreateInput[],
  unscheduledDeadlines: Prisma.user_deadlinesCreateInput[],
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
    events: any[],
    deadlines: any[],
    userPreferences: UserPreferences
  ): SchedulerOutput {
    // TBD
  }
}