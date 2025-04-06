import { Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'; // Your Firebase configuration



bcrypt from 'bcrypt';



const prisma = new PrismaClient();

/*
* Log in Controller 
*/ 
class Login {

    public static async login (req: Request, res: Response): Promise <any > {
     // Get variables for the login process
     const {email} = req.body;
     try {
         // Check if user exists
         const user = await prisma.user.findUnique({
            where: {email},
         }); 
         
         if (!user)
             return res.status(401).json({
                 status: "failed",
                 data: [],
                 message:
                     "Invalid email or password. Please try again with the correct credentials.",
             });
         // Valid password
         
         // Returns user info except password
         const { password, ...user_data } = user._doc;
 
         res.status(200).json({
             status: "success",
             data: [user_data],
             message: "You have successfully logged in.",
         });
     } catch (err) {
         res.status(500).json({
             status: "error",
             code: 500,
             data: [],
             message: "Internal Server Error",
         });
     }
     res.end();
  }
}
 
   // res.send('LogIn');

export default Login;