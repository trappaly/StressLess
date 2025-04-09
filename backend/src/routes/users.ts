import { Request, Response, NextFunction } from 'express';
import Responses from '../controllers/User/Responses';

// Creates the router
const express = require('express');
const router = express.Router();

// Keeps track of time on website
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Get survey results
router.get('/getsurveyresults:/userID', Responses.getResponses);

// Save survey results
router.post('/savesurveyresults:/userID', Responses.saveResponses);

export default router;
