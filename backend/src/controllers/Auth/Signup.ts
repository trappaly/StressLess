import { Request, Response } from 'express';
import prisma from "../../client";

/*
* Creates users by signing up 
*/

class Signup {
  public static async signup (req: Request, res: Response): Promise<any>{
    const {email, username, password} = req.body;

    try {
    const user = await prisma.users.create({
      data: {
        email, 
        password
       // password_hash: hashed_password;
      },
      // Accesses neccesary variables in user's model 
      select: {
        id: true,
        username: true,
      },
    });
    res.status(200).json({
        status: "success",
        data: [user],
        message: "You have signed up.",
    });
} catch (err) {
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