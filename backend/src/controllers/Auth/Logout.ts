import { Request, Response } from 'express';

class Logout {
    public static logout (req: Request, res: Response): any {
    res.send('LogOut');
    }
}

export default Logout;