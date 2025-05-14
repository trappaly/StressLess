import { Request, Response } from 'express';
import { auth } from '../config/firebaseAdmin.ts';
import prisma from '../config/prisma.ts';

/**
 * AuthController class handles user authentication.
 * It includes methods for signing up and signing in users.
 */
export default class AuthController {
  /**
   * Sign Up method
   * @param req - Express request object
   * @param res - Express response object
   */
  public static signUp = async (req: Request, res: Response): Promise<any> => {
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

  /**
   * Sign In method
   * @param req - Express request object
   * @param res - Express response object
   */
  public static signIn = async (req: Request, res: Response): Promise<any> => {
    try {
      const { idToken } = req.body;

      if (!idToken) {
        return res.status(400).json({ error: 'No ID token provided' });
      }

      // 1. Verify Firebase ID token
      const decodedToken = await auth.verifyIdToken(idToken);
      const { uid } = decodedToken;

      // 2. Check if user exists in DB
      const user = await prisma.users.findUnique({
        where: { id: uid },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // 3. Return user data or success message (with token)
      return res.status(201).json({
        user: {
          id: user.id,
          email: user.email,
        },
        message: 'Sign-in successful',
      });
    } catch (error) {
      console.error('Sign-in Error:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  };

  /**
   * Delete account should delete all data entry with user_id matched
   * @param req
   * @param res
   * @constructor
   */
  public static async deleteAccount(req: Request, res: Response): Promise<any> {
    try {
      const user_id = req.params.user_id;
      const user = await prisma.users.findUniqueOrThrow({
        where: {
          id: user_id,
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Delete their preferences
      await prisma.user_preferences.deleteMany({
        where: {
          user_id: user_id,
        },
      });

      // Delete their events
      await prisma.user_events.deleteMany({
        where: {
          user_id: user_id,
        },
      });

      // Delete their deadlines
      await prisma.user_deadlines.deleteMany({
        where: {
          user_id: user_id,
        },
      });

      // Delete the user instance
      await prisma.users.deleteMany({
        where: {
          id: user_id,
        }
      });

      return res.status(201).json({
        user: {
          id: user.id,
          email: user.email,
        },
        message: 'Deleted account successfully',
      });
    } catch (error: any) {
      console.error('Sign-in Error:', error);
      return res.status(500).json({ error: error.message });
    }
  }
}
