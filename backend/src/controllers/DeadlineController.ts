import { Request, Response } from 'express';
import prisma from '../config/prisma';

export default class Deadline {
  /**
   * Accesses all of a user's deadlines
   */   
  public static async getUserDeadlines(req: Request, res: Response) {
    try {
      // Finds all of the possible deadlines for each user
      const userDeadlines = await prisma.user_deadlines.findMany({
        where: {
          user_id: req.params.user_id
        }
      });
      // Succuesfully is able to get all of the user's deadlines 
      res.json(userDeadlines);
    } catch {
      // Unable to found the user's deadlines
      res.status(404).json({ error: 'Not found' });
    }
  }
  
  /**
   * Accesses each indvidual deadline 
   */
  public static async getDeadlinebyId(req: Request, res: Response) {
    try {
      // Finds the user's one deadline 
      const deadline = await prisma.user_deadlines.findUniqueOrThrow({
        where: {
          id: req.params.id
        }
      });
      // Succuesfully is able to find the user's deadline
      res.json(deadline);
    }
    catch {
      // Unable to find the user's deadline
      res.status(404).json({ error: 'Not found' });
    }
  }
  
  /**
   * Creates a deadline 
   */ 
  public static async postDeadline(req: Request, res: Response) {
    try {
      // Accesses all of the variables and their values in the deadline data structure
      const values = this.getUserDeadlineValues(req);   
      // Creates a new deadline   
      const result = await prisma.user_deadlines.create({
        data: { ...values },
      });
      // Succuesfully creates a new deadline
      res.json(result);
    }
    catch {
      // Unable to create a new deadline
      res.status(404).json({ error: 'Not found' });
    }
  }
  
  /**
   * Updates a deadline 
   */
  public static async putDeadline(req: Request, res: Response) {
    try {
      // Accesses all of the variables and their values in the deadline data structure
      const values = this.getUserDeadlineValues(req);
      // Edits the current deadline 
      const result = await prisma.user_deadlines.update({
        where: {id: req.params.id}, 
        data: { ...values },
      });
      // Succuesfully updates a new deadline
      res.json(result);
    }
    catch {
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
          id: req.params.event_id
        }        
      });
      // Succuesfully deletes a deadline
      res.json(deadline);
    }
    catch {
      // Unable to delete a deadline
      res.status(404).json({ error: 'Not found' });
    }
  }
  
  
  /**
   * Gets all of the values associated with a deadline 
   */
  private static getUserDeadlineValues(req: Request) {
    // Getting all of the information of the deadline from user input
    const {                   
      id,
      user_id,               
      event_id,              
      title,                 
      due_time,               
      description,            
      priority,              
      projected_duration,
      created_at     
    } = req.body;
    // Saving all of the deadline values to the database 
    return {   
      id,                
      user_id,               
      event_id,              
      title,                 
      due_time,               
      description,            
      priority,              
      projected_duration, 
      created_at
    };
  }
}