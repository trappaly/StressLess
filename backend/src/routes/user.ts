import Responses from '../controllers/User/Responses';

// TODO: what is reponses? why is it in user?
// Creates the router
const express = require('express');
const router = express.Router();

// Get survey results
router.get('/getsurveyresults:/userID', Responses.getResponses);

// Save survey results
router.post('/savesurveyresults:/userID', Responses.saveResponses);

export default router;
