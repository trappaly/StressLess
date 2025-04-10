import { Request, Response, NextFunction } from 'express';
import AuthController from '../controllers/AuthController.ts';

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
router.post('/signin', AuthController.signIn);

// Sign up route
router.post('/signup', AuthController.signUp);

export default router;
