import { Request, Response } from 'express';

class Signin {
  public static signin(req: Request, res: Response): any {
    res.send('LogOut');
  }
}

export default Signin;
