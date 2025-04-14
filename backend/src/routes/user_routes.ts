// import {Router} from 'express'; 
import {Request, Response, NextFunction} from 'express';
import Responses from '../controllers/User/Responses';

// Creates the router 
const express = require("express");
const router = express.Router();

// Keeps track of time on the website
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Save survey results to database 
router.post('/surveyresults/:user_id', Responses.getResponses);

