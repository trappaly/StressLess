import { Request, Response } from 'express';

class Signup {

  public static signup (req: Request, res: Response): any {

// Authenticate 
OR: [
    {
      email: {
        endsWith: 'gmail.com',
      },
    },
    { email: { endsWith: 'outlook.com' } },
  ],

    res.status(200).json({
        status: "success",
        data: [user_data],
        message: "You have successfully signed up.",
    });
} catch (err) {
    res.status(500).json({
        status: "error",
        code: 500,
        data: [],
        message: "There was an error signing up",
    });
}
res.send('SignUp');
res.end();
}
export default Signup;