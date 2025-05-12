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
   * Adds a new event and its recurrences to database using values in the request.
   * Response will be an object containing an array.
   * 
   * @param req.body - Fields have the same names of the columns in the
   *  `user_events` table. `id` will be ignored since an UUID will be generated.
   */
  public static async postEvent(req: Request, res: Response) {
    const values = EventController.getUserEventValues(req);
    const eventSeries = EventController.createEventSeriesFromEvent({ ...values });
    // const eventSeries = [{ ...values }];
    const result = await prisma.user_events.createManyAndReturn({
      data: eventSeries,
    });
    res.json({
      eventSeries: result,
    });
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

  /**
   * Creates an event series from a single event in request if the event is recurring.
   * 
   * Note that we create recurring events in the following way:
   * - Create the first event, regardless of whether it is in the recurrence period.
   * - Repeatedly check same time previous (day/week/month) to see if it falls
   * in recurrence period
   *   - If time is not in recurrence period but after start of recurrence period,
   *   do not create an event.
   *   - If time is in recurrence period, create an event
   *   - If time if before start of recurrence period, stop searching
   * - Repeatedly check same time next (day/week/month) to see if it falls
   * in recurrence period
   *   - Similar logic, but we are moving towards the end of recurrence period
   *     and stopping search there.
   * - Note that if any newly created events due to recurrence (but not the
   * event given as the parameter) would fall partially within the recurrence
   * period, we do not create this new event. For recurrences to be created,
   * they must fall completely within the recurrence period.
   * - Note that this also prevents mishandling of recurrence starting after
   * its end.
   * 
   * For example: If we want to create an weekly recurring event on May 5, 2025,
   * at 00:00-01:00, with the recurrence period between May 12 at 00:30 and
   * May 27 at 00:00, then the output would be three events on:
   * - May 5, 2025,
   * - May 19, 2025,
   * - May 26, 2025.
   * 
   * @param event The initial event that we want to create recurrences for.
   * This event will always be returned.
   * 
   * @returns An array with `event` and its recurring instances.
   */
  private static createEventSeriesFromEvent(event: any) {
    const returned = [event];

    // If event is not recurring or invalid, return single event array
    if (
      !event.is_recurring ||
      !event.recurrence_pattern ||
      !event.recurrence_start_date ||
      !event.recurrence_end_date
    ) {
      return returned;
    }

    // Define some helper functions

    const getNextRecurrence = (
      current: Date | null, pattern: string, forward: boolean
    ): Date | null => {
      if (!current) return null;

      const nextDate = new Date(current.getTime());
      if (pattern === 'daily') {
        nextDate.setDate(current.getDate() + (forward ? 1 : -1));
      } else if (pattern === 'weekly') {
        nextDate.setDate(current.getDate() + (forward ? 7 : -7));
      } else if (pattern === 'monthly') {
        nextDate.setMonth(current.getMonth() + (forward ? 1 : -1));
      } else {
        return null;
      }

      return nextDate;
    };

    const eventInRecurrencePeriod = (
      eventToCheck: any, recurrenceStart: Date, recurrenceEnd: Date
    ): boolean => {
      return (
        new Date(eventToCheck.start_time) >= recurrenceStart && (
          !eventToCheck.end_time ||
          new Date(eventToCheck.end_time) < recurrenceEnd
        )
      );
    };

    const addEventIfInRecurrencePeriod = (
      originalEvent: any, startTime: Date, eventDuration: number, returnedArray: any[]
    ) => {
      const newEvent = {
        ...originalEvent,
        start_time: startTime,
        end_time: eventDuration > 0 ? new Date(startTime.getTime() + eventDuration) : undefined,
      };
      if (eventInRecurrencePeriod(
        newEvent,
        new Date(event.recurrence_start_date),
        new Date(event.recurrence_end_date)
      )) {
        returnedArray.push(newEvent);
      }
    };

    // Calculate event duration
    const eventDuration = event.end_time ?
      new Date(event.end_time).getTime() - new Date(event.start_time).getTime() :
      -1;
    
    // 1. Add days after event:
    for (
      let d = getNextRecurrence(new Date(event.start_time), event.recurrence_pattern, true);
      d && d < new Date(event.recurrence_end_date);
      d = getNextRecurrence(d, event.recurrence_pattern, true)
    ) {
      addEventIfInRecurrencePeriod(event, d, eventDuration, returned);
    }

    // 2. Add days before event:
    for (
      let d = getNextRecurrence(new Date(event.start_time), event.recurrence_pattern, false);
      d && d > new Date(event.recurrence_start_date);
      d = getNextRecurrence(d, event.recurrence_pattern, false)
    ) {
      addEventIfInRecurrencePeriod(event, d, eventDuration, returned);
    }

    return returned;
  }
  

}
