import AuthController from '../controllers/AuthController.ts';

// Creates the router
const express = require('express');
const router = express.Router();

// Sign In route
router.post('/signin', AuthController.signIn);

// Sign up route
router.post('/signup', AuthController.signUp);

export default router;
