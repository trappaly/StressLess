import { Request, Response } from 'express';


/*
* Log in Controller 
*/ 
class Login {
  public static login (req: Request, res: Response): any {
     // Get variables for the login process
     const { email } = req.body;
     try {
         // Check if user exists
         const user = await User.findOne({ email }).select("+password");
         if (!user)
             return res.status(401).json({
                 status: "failed",
                 data: [],
                 message:
                     "Invalid email or password. Please try again with the correct credentials.",
             });
         // if user exists
         // validate password
         const isPasswordValid = await bcrypt.compare(
             `${req.body.password}`,
             user.password
         );
         // if not valid, return unathorized response
         if (!isPasswordValid)
             return res.status(401).json({
                 status: "failed",
                 data: [],
                 message:
                     "Invalid email or password. Please try again with the correct credentials.",
             });
         // return user info except password
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