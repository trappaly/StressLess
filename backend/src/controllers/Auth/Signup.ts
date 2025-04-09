import { Request, Response } from 'express';

class Signup {
  public static signup(req: Request, res: Response): any {
    res.send('SignUp');
  }
}

export default Signup;

// // routes/auth.ts (or wherever you want to handle user creation)
// import express from 'express';
// import { verifyFirebaseToken } from '../middleware/auth';
// import { prisma } from '../lib/prisma'; // or your ORM/db
//
// const router = express.Router();
//
// router.post('/auth/signup', verifyFirebaseToken, async (req, res) => {
//   const { uid, email, name, picture } = req.user;
//
//   try {
//     let user = await prisma.user.findUnique({ where: { id: uid } });
//
//     if (!user) {
//       user = await prisma.user.create({
//         data: {
//           id: uid, // Firebase UID
//           email: email,
//           name: name ?? '', // optional fields
//           profileImage: picture ?? '',
//         },
//       });
//     }
//
//     res.status(200).json({ message: 'User created or exists', user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal error' });
//   }
// });
