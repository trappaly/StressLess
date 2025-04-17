// import {Router} from 'express';
import { Request, Response, NextFunction } from 'express';
import PreferenceController from '../controllers/PreferenceController';

// Creates the router
const express = require('express');
const router = express.Router();

// Keeps track of time on website
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Save survey results to database
router.post('/surveyresults/:user_id', PreferenceController.postPreferences);
// Get all survey results from database
router.get(
  '/surveyresults/:user_id',
  PreferenceController.getPreferencesByUserId
);

export default router;
