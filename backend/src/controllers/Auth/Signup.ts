import { Request, Response } from 'express';
import prisma from "../../client";

/*
* Creates users by signing up 
*/

class Signup {

  /*
  * Creates a user's account 
  */
  public static async signup (req: Request, res: Response): Promise<any>{
    const {email, username, password_hash} = req.body;
    
    try {
    const user = await prisma.users.create({
      data: {
        username, 
        password_hash
      },
      // Accesses neccesary variables in user's model 
      select: {
        id: true,
        username: true,
      },
    })
    // Succuesfully signs the user up 
    res.status(200).json({
        status: "success",
        data: [user],
        message: "You have created a StressLess account.",
    });
} catch (err) {
  // The user is unable to sign up 
    res.status(500).json({
        status: "error",
        code: 500,
        data: [],
        message: "There was an error signing up",
    });
  }
  }
}
export default Signup;