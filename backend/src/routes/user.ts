import PreferenceController from '../controllers/PreferenceController';

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

export default router;
