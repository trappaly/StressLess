import { Request, Response } from 'express';

class Signout {
  public static signout(req: Request, res: Response): any {
    res.send('SignOut');
  }
}
export default Signout;
