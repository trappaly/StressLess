import { Request, Response } from 'express';
import prisma from '../config/prisma.ts';
import Scheduler from '../utils/Scheduler.ts';
import { UserPreferences } from '../db/types.ts';
import UserPreferenceUtils from '../utils/UserPreferenceUtils.ts';

/**
 * ScheduleController
 *
 * Functions for handling triggering the backend to create a `perfect` schedule based on
 * the user's current preferences, deadlines, and events. Future work might include functions
 * that allow deleting all generated events, regenerating schedule, etc.
 *
 * How to use:
 *
 * User sends a HTTP request to the URL with the route that calls the below
 * function. Check ../routes/user.ts for the exact routes.
 *
 * For example, if we want to generate a schedule:
 *
 * 1. From the frontend, send an HTTP POST request to the route which calls
 *    the generateSchedule function. For example:
 *
 *    POST <BACKEND URL>/api/user/generate-schedule/<user-id>
 *
 * 2. The frontend receives the data in JSON format (JS objects/arrays).
 *
 * Note that we can use the Axios library in the frontend to send HTTP requests.
 */
export default class ScheduleController {
  /**
   * generateSchedule is a function that use the user's uuid to fetch
   *  user_preferences
   *  user_events
   *  user_deadlines where projected_duration and due_time are not null
   * call functions from utils.Scheduler to get generated events data
   * loop through result.scheduledEvents and insert into user_events database
   *
   * @param req
   *    should have user's uuid at req.params.user_id
   *    should not have anything in req.body
   * @param res
   *    send back json format
   */
  public static async generateSchedule(req: Request, res: Response) {
    try {
      // extract out the user's id
      const userId = req.params.user_id;

      // fetch user's preferences
      const userPreferences = await prisma.user_preferences.findMany({
        where: {
          user_id: userId,
        },
      });
      // transform to the processed preference type
      const processedPreferences : UserPreferences = UserPreferenceUtils.transform(userPreferences);

      // fetch user's events
      const userEvents = await prisma.user_events.findMany({
        where: {
          user_id: req.params.user_id,
        },
      });

      // fetch user's deadlines
      const userDeadlines = await prisma.user_deadlines.findMany({
        where: {
          user_id: req.params.user_id,
        },
      });

      // feed information to our scheduler logic
      const {scheduledEvents} = Scheduler.scheduleDeadlines(userEvents, userDeadlines, processedPreferences);

      // loop through the returned events and add them to the database
      for (const event of scheduledEvents) {
        await prisma.user_events.create({
          data: {
            ...event
          },
        });
      }

    } catch (error : any) {
      res
        .status(500)
        .json({ error: 'Error in auto-generating schedule, ' + error.message });
    }
  }
}