import { Router } from 'express';
import EventController from '../controllers/EventController';

// Creates the router
const router = Router();

// Get all events for a particular user
router.get('/events/by-user/:user', EventController.getUserEvents);

// Add an event
router.post('/events', EventController.postEvent);

// Get an event by id
router.get('/events/id/:id', EventController.getEventById);

// Modify an event
router.put('/events/id/:id', EventController.putEvent);

// Delete an event
router.delete('/events/id/:id', EventController.deleteEvent);

export default router;
