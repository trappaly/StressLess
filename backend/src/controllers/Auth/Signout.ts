import { Request, Response } from 'express';

class Login {
    public static login (req: Request, res: Response): any {
    res.send('LogIn');
    }
}
export default Login;