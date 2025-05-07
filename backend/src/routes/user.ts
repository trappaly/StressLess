import PreferenceController from '../controllers/PreferenceController';
import ScheduleController from '../controllers/ScheduleController.ts';

// Creates the router
const express = require('express');
const router = express.Router();

// Save survey results to database
router.post('/surveyresults/:user_id', PreferenceController.postPreferences);
// Get all survey results from database
router.get(
  '/surveyresults/:user_id',
  PreferenceController.getPreferencesByUserId
);
// Update survey results in database
router.put(
  '/surveyresults/:user_id',
  PreferenceController.putPreferenceByUserId
);

// Generate events according to user's preferences and pre-existing calendar
router.post('/generate-schedule/:user_id', ScheduleController.generateSchedule);

export default router;
