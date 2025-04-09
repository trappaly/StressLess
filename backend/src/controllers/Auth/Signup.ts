import { Request, Response } from 'express';
import prisma from "../../client";

/*
* Creates users by signing up 
*/

class Signup {
  public static async signup (req: Request, res: Response): Promise<any>{
    const {id, email} = req.body;

    try {
    const user = await prisma.users.create({
      data: {
        id: true
      },
      select: {
        id: true,
        email: true,
      },
    })
    res.status(201).json({
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