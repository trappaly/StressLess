import PreferenceController from "../controllers/PreferenceController";

// TODO: what is reponses? why is it in user?
// Creates the router
const express = require('express');
const router = express.Router();

// Get survey results
router.get('/getsurveyresults:/userID', PreferenceController.postPreferences);

// Save survey results
router.post('/savesurveyresults:/userID', PreferenceController.postPreferences);

export default router;
