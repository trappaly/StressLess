
import { Request, Response} from 'express';
import prisma from "../../client";

/*
* Users log out of their account 
*/

class Logout {

  /*
  * Logs a user out of their account
  */
 public static async logout(req: Request, res: Response): Promise<any> {
  const {email, username, password} = req.body;

  // Logs out the user, but keeps their data in the server 
  try {
    const user = await prisma.users.updateMany({
      select: {
        email, 
        password
      },
    })
    // User is able to succuesfully log out 
    res.status(200).json({
        status: "success",
        data: [user],
        message: "You have logged out.",
    });
} 
// User is unable to log out 
catch (err) {
    res.status(500).json({
        status: "error",
        code: 500,
        data: [],
        message: "There was an error logging out",
    });
  }
  }
}

export default Logout;