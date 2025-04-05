import {Router} from 'express'; 
import {Request, Response, NextFunction} from 'express';
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
router.get('/', (req: Request, res: Response) => {
  res.send('LogIn');
})

// Sign up route 
  router.get('/', (req: Request, res: Response) => {
  res.send('SignUp');
})

// Authenticate with Google route
  router.get('/', (req: Request, res: Response) => {
  res.send('GoogleAuthentication');
})

// Authetnicate with Microsoft
 router.get('/', (req: Request, res: Response) => {
  res.send('MicrosfotAuthentication');
})

// Log out route 
router.get('/', (req: Request, res: Response) => {
  res.send('LogOut');
})

// Survey results route
router.get('/', (req: Request, res: Response) => {
  res.send('SurveyResults');
})



//import HomeController from '../controllers/Home';

// Sign up route
//router.get('/signup', RegisterController.show);
//router.post('/signup', RegisterController.perform);

// Google authetnication 
// router.get('/auth/google', GoogleController.show);
// router.post('auth/google', GoogleController.perform);

// Microsoft authentication 
// router.get('/auth/microsoft', MicrosoftController.show);
// router.post('/auth/microsoft', MicrosoftController.perform);

// Log in route 
// router.get('/login',  LoginController.show);
// router.post('/login', LoginController.perform);

// Log out 
// router.get('/logout', LogoutController.show);
// router.get('/logout', LogoutController.perform);



// GET method route
//router.get('/', (req: Request, res: Response) => {
  //res.send('GET request to the homepage');
//})


// POST method route 
 // router.post('/', (req: Request, res: Response) => {
 // res.send('POST request to the homepage');
// })

// PUT method route
  // router.put('/', (req: Request, res: Response) => {
  // res.send('PUT request to the homepage');
// })

// DELETE method route
 // router.delete('/', (req: Request, res: Response) => {
  // res.send('DELETE request to the homepage');
//})

