import { Request, Response } from 'express';
import prisma from '../config/prisma.ts';

/**
 * EventController
 *
 * Functions for handling requests from the frontend for adding, viewing, and
 * deleting calendar events.
 *
 * How to use:
 *
 * User sends a HTTP request to the URL with the route that calls the below
 * function. Check ../routes/calendar.ts for the exact routes.
 *
 * For example, if we want to get user events:
 *
 * 1. From the frontend, send an HTTP GET request to the route which calls
 *    the getUserEvents function. For example:
 *
 *    GET <BACKEND URL>/api/calendar/events/by-user/<your-user-id>
 *
 * 2. The frontend receives the data in JSON format (JS objects/arrays).
 *
 * Note that we can use the Axios library in the frontend to send HTTP requests.
 */
export default class EventController {
  /**
   * Gets all the events for specified user from the `user_events` table.
   * Sends a array of objects with fields corresponding to columns in JSON format.
   * 
   * @param req.params.user_id ID of the user
   */
  public static async getUserEvents(req: Request, res: Response) {
    try {
      const userEvents = await prisma.user_events.findMany({
        where: {
          user_id: req.params.user_id,
        },
      });
      res.json(userEvents);
    } catch {
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Gets an event by its id from the `user_events` table. Sends on object with
   * fields corresponding to columns in JSON format.
   * 
   * @param req.params.id - ID of the event
   */
  public static async getEventById(req: Request, res: Response) {
    try {
      const event = await prisma.user_events.findFirstOrThrow({
        where: {
          id: req.params.id, // Ensure id is uuid
        },
      });
      res.json(event);
    } catch {
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Adds a new event to database using values in the request.
   * @param req.body - Fields have the same names of the columns in the
   *  `user_events` table. `id` will be ignored since an UUID will be generated.
   */
  public static async postEvent(req: Request, res: Response) {
    const values = EventController.getUserEventValues(req);
    const result = await prisma.user_events.create({
      data: { ...values },
    });
    res.json(result);
  }

  /**
   * Modifies a specified event to database using values in the request.
   * The event must be present in the database; otherwise, the response will
   * contain a 404 error.
   * 
   * @param req.body - Fields have the same names of the columns in the
   *  `user_events` table. `id` will be ignored since an UUID will be generated.
   */
  public static async putEvent(req: Request, res: Response) {
    try {
      const values = EventController.getUserEventValues(req);
      const event = await prisma.user_events.update({
        where: { id: req.params.id }, // Ensure id is uuid
        data: { ...values },
      });
      res.json(event);
    } catch (e) {
      console.log((e as Error).message);
      res.status(404).json({ error: 'Not found: ' + (e as Error).message });
    }
  }

  // TODO: Once delete deadline is implemented separately in the frontend, remove this nested logic
  /**
   * Deletes a specified event.
   * @param req.params.id ID of the event.
   */
  public static async deleteEvent(req: Request, res: Response) {
    try {
      const event = await prisma.user_events.deleteMany({
        where: { id: req.params.id }, // Ensure id is uuid
      });
      if (event.count === 0) {
        const deadline = await prisma.user_deadlines.deleteMany({
            where: { id: req.params.id },
          });
        if (deadline.count === 0) {
          res.status(404).json({ error: 'Did not find event or deadline with such id' });
        } else {
          res.json({ message: 'Deleted deadline', count: deadline.count });
        }
      } else {
        res.json({ message: 'Deleted event', count: event.count });
      }
    } catch (error:any) {
      console.error(error);
      res.status(404).json({ error: error });
    }
  }

  /**
   * Deletes all generated events for a specific user.
   * @param req.params.user_id ID of the user.
   */
  public static async deleteGeneratedEvent(req: Request, res: Response) {
    try {
      const user_id = req.params.user_id;
      const generatedEvents = await prisma.user_events.deleteMany({
        where: {
          user_id: user_id,
          is_generated: true,
        },
      });
      res.json(generatedEvents);
    } catch (error:any) {
      res.status(404).json({ error: error });
    }
  }

  /**
   * Returns an object containing the values of the user event, excluding the
   * id (created automatically) and the creation date.
   */
  private static getUserEventValues(req: Request) {
    const {
      user_id,
      title,
      start_time,
      end_time,
      description,
      location_place,
      is_recurring,
      recurrence_pattern,
      recurrence_start_date,
      recurrence_end_date,
      is_generated,
      break_time,
      deadline_id,
    } = req.body;
    return {
      user_id,
      title,
      start_time,
      end_time,
      description,
      location_place,
      is_recurring,
      recurrence_pattern,
      recurrence_start_date,
      recurrence_end_date,
      is_generated,
      break_time,
      deadline_id,
    };
  }
}
