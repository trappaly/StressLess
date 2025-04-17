import { Router } from 'express'; 
import { Request, Response, NextFunction } from 'express';
import Event from '../controllers/Calendar/Event';
import Deadline from '../controllers/Calendar/Deadline';

// Creates the router 
const express = require("express");
const router = express.Router();

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

// Get all deadlines for a particular user 
router.get('/deadlines/by-user/:user', Deadline.getUserDeadlines);

// Add a deadline
router.post('/deadlines', Deadline.postDeadline);

// Get a deadline by id
router.get('/deadlines/id/:id', Deadline.getDeadlinebyId);

// Modify a deadline 
router.put('/deadlines/id/:id', Deadline.putDeadline);

// Delete a deadline 
router.delete('/deadlines/id/:id', Deadline.deleteDeadline);

export default router;