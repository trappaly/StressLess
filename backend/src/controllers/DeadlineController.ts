import { Request, Response } from 'express';
import prisma from '../config/prisma';

export default class Deadline {
  /**
   * Gets all the deadlines for specified user from the `user_events` table.
   * Sends a array of objects with fields corresponding to columns in JSON format.
   * 
   * @param req.params.user_id ID of the user
   */
  public static async getUserDeadlines(req: Request, res: Response) {
    try {
      // Finds all the possible deadlines for each user
      const userDeadlines = await prisma.user_deadlines.findMany({
        where: {
          user_id: req.params.user_id,
        },
      });
      // Successfully is able to get all the user's deadlines
      res.json(userDeadlines);
    } catch {
      // Unable to found the user's deadlines
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Gets an event by its id from the `user_deadlines` table. Sends on object with
   * fields corresponding to columns in JSON format.
   * 
   * @param req.params.id - ID of the deadline
   */
  public static async getDeadlineById(req: Request, res: Response) {
    try {
      // Finds the user's one deadline
      const deadline = await prisma.user_deadlines.findUniqueOrThrow({
        where: {
          id: req.params.id,
        },
      });
      // Successfully is able to find the user's deadline
      res.json(deadline);
    } catch {
      // Unable to find the user's deadline
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Adds a new deadline to database using values in the request.
   * @param req.body - Fields have the same names of the columns in the
   *  `user_deadlines` table. `id` will be ignored since an UUID will be generated.
   */
  public static async postDeadline(req: Request, res: Response) {
    try {
      // Accesses all the deadline variables in the request
      const values = Deadline.getUserDeadlineValues(req);
      // Creates a new deadline
      const result = await prisma.user_deadlines.create({
        data: { ...values },
      });
      // Successfully creates a new deadline
      res.json(result);
    } catch {
      // Unable to create a new deadline
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Updates a deadline
   */
  public static async putDeadline(req: Request, res: Response) {
    try {
      // Accesses all the deadline variables in the request
      const values = Deadline.getUserDeadlineValues(req);
      // Edits the current deadline
      const result = await prisma.user_deadlines.update({
        where: { id: req.params.id },
        data: { ...values },
      });
      // Successfully updates a new deadline
      res.json(result);
    } catch {
      // Unable to update a new deadline
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Deletes a deadline
   */
  public static async deleteDeadline(req: Request, res: Response) {
    try {
      // Deletes a deadline
      const deadline = await prisma.user_deadlines.delete({
        where: {
          id: req.params.id,
        },
      });
      // Successfully deletes a deadline
      res.json(deadline);
    } catch {
      // Unable to delete a deadline
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Gets all the values associated with a deadline from the request body
   * (i.e. excluding id, since database generates id automatically)
   */
  private static getUserDeadlineValues(req: Request) {
    const {
      user_id,
      event_id,
      title,
      due_time,
      description,
      priority,
      projected_duration,
      created_at,
    } = req.body;
    return {
      user_id,
      event_id,
      title,
      due_time,
      description,
      priority,
      projected_duration,
      created_at,
    };
  }
}
