import AuthController from '../controllers/AuthController.ts';

// Creates the router
const express = require('express');
const router = express.Router();

// Sign In route
router.post('/signin', AuthController.signIn);

// Sign Up route
router.post('/signup', AuthController.signUp);

// Delete Account route
router.delete('/delete/:user_id', AuthController.deleteAccount);

export default router;
