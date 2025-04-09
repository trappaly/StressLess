import { Request, Response } from 'express';
import prisma from '../../config/prisma'; // assuming you export PrismaClient from here
import { auth } from '../../config/firebaseAdmin';

class Signup {
  public static signup = async (req: Request, res: Response): Promise<any> => {
    try {
      const { idToken } = req.body;

      if (!idToken) {
        return res.status(400).json({ error: 'No ID token provided' });
      }

      // 1. Verify Firebase token
      const decodedToken = await auth.verifyIdToken(idToken);
      const { uid, email } = decodedToken;

      // 2. Check if user already exists in DB
      // Though generally, we don't need to handle this.
      // Firebase does this for us.
      const existingUser = await prisma.users.findUnique({
        where: { id: uid },
      });

      if (existingUser) {
        return res
          .status(200)
          .json({ users: existingUser, message: 'User already exists' });
      }

      // 3. Create user in DB
      const newUser = await prisma.users.create({
        data: {
          id: uid,
          email: email ?? '',
        },
      });

      return res
        .status(201)
        .json({ users: newUser, message: 'User created successfully' });
    } catch (error) {
      console.error('Signup Error:', error);
      return res.status(500).json({ error: error });
    }
  };
}

export default Signup;
