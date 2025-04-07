import { Router } from 'express'; 
import { Request, Response, NextFunction } from 'express';
import Event from '../controllers/Calendar/Event';

// import * as expressJwt from 'express-jwt';

// Creates the router 
const router = Router();

// Keeps track of time on website
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Get all events for a particular user
router.get('/events/by-user/:user', Event.getUserEvents);

// Add an event
router.post('/events', Event.postEvent);

// Get an event by id
router.get('/events/id/:id', Event.getEventById);

// Modify an event
router.put('/events/id/:id', Event.putEvent);

// Delete an event
router.delete('/events/id/:id', Event.deleteEvent);

export default router;