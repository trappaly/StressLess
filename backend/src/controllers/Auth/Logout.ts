
import { Request, Response} from 'express';
import prisma from "../../client";

/*
* Users log out of their account 
*/

class Logout {

 public static async logout(req: Request, res: Response): Promise<any> {
  const {email} = req.body;

  try {
    const user = await prisma.users.updateMany({
      select: {
        email
      },
    });
    res.status(200).json({
        status: "success",
        data: [user],
        message: "You have logged out.",
    });
} catch (err) {
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