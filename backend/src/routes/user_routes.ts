import {Router} from 'express'; 
import {Request, Response, NextFunction} from 'express';
import Signup from '../controllers/Auth/Signup';
import Login from '../controllers/Auth/Login';
import Logout from '../controllers/Auth/Logout';
import Responses from '../controllers/User/Responses'

// import * as expressJwt from 'express-jwt';

// Creates the router 
const express = require("express");
const router = express.Router();

// Keeps track of time on website
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// Login route
router.post('/login', Login.login);


// Sign up route 
router.post('/signup', Signup.signup);


// Redirect to Firebase (different route at some point), this needs to be edited
router.get('/firebase', (req: Request, res: Response) => {
  res.send('Redirect to Firebase');
})

// Log out route 
router.post('/logout', Logout.logout);

// Get survey results 
router.get('/getsurveyresults:/userID', Responses.getResponses);

// Save survey results 
router.post ('/savesurveyresults:/userID', Responses.saveResponses);

