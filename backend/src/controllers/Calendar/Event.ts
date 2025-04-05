import { Request, Response } from 'express';

class Event {

  /**
   * Gets the events for specified user
   */ 
  public static getUserEvent(req: Request, res: Response): any {
    res.send('Events');
  }

  /**
   * Gets an event by its id
   */
  public static getEventById(req: Request, res: Response): any {
    res.send('Event');
  }

  /**
   * Adds a new event
   */
  public static postEvent(req: Request, res: Response): any {
    res.send('Added event');
  }

  /**
   * Modifies a specified event.
   */
  public static putEvent(req: Request, res: Response): any {
    res.send('Modified event');
  }
}

export default Event;