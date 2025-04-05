import {Router} from 'express'; 
import * as expressJwt from 'express-jwt';



const express = require("express");
const router = express.Router();

import HomeController from '../controllers/Home';



// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })


// Sign up route
router.get('/signup', RegisterController.show);
router.post('/signup', RegisterController.perform);

// Google authetnication 
router.get('/auth/google',  );
router.post('auth/google');

// Microsoft authentication 
router.get('/auth/microsoft');
router.post('/auth/microsfot');

// Log in route 
router.get('/login',  LoginController.show);
router.post('/login', LoginController.perform);

// Log out 
router.get('/logout', LogoutController.perform);

// Save survey responses 
router.get('/survey/save');
router.get('/survey/save');


