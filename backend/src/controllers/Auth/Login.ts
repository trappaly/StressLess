
import { Request, Response} from 'express';
import prisma from "../../client";
import bcrypt from "bcrypt";

/*
* Access users by logging in 
*/ 
class Login {

    
 hashPassword = async (password: string) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hashedPassword);
};

  verifyPassword = async (inputPassword: string, storedHash: string) => {
    const isMatch = await bcrypt.compare(inputPassword, storedHash);
    console.log("Password Match:", isMatch);
};


    public static async getUser (req: Request, res: Response): Promise <any > {
     // Get variables for the login process
     const {email} = req.body;
     try {
         // Check if user exists
         const user = await prisma.user.findUnique({
            where: {
                email},
         }); 
         // If it can't find the user
         if (!user)
             return res.status(404).json({
                 status: "failed",
                 data: [],
                 message:
                     "Can't find the user",
             });
        // User can succuesfully log in 
         res.status(200).json({
             status: "success",
             data: [user],
             message: "You have logged in.",
         });
         // Problem with the server
     } catch (err) {
         res.status(500).json({
             status: "error",
             code: 500,
             data: [],
             message: "Internal Server Error",
         });
     }
  }
}
export default Login;