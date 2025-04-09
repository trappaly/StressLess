import Signup from '../controllers/Auth/Signup';
import Signin from '../controllers/Auth/Signin';
import Signout from '../controllers/Auth/Signout.ts';

import { Request, Response, NextFunction } from 'express';

// Creates the router
const express = require('express');
const router = express.Router();

// Keeps track of time on website
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Sign In route
router.post('/signin', Signin.signin);

// Sign up route
router.post('/signup', Signup.signup);

// Sign out route
router.post('/signout', Signout.signout);

export default router;
