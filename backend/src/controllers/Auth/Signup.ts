import { Request, Response } from 'express';

class Signup {

    public static signup (req: Request, res: Response): any {
        res.send('SignUp');
    }


}

export default Signup;