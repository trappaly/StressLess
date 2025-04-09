// // routes/auth.ts
// import { Router, Response } from 'express';
// import {
//   verifyFirebaseToken,
//   AuthenticatedRequest,
// } from '../middleware/verifyFirebaseToken.ts.ts';
// import prisma from '../client.ts';
//
// const router = Router();
//
// // 🔐 SIGN UP or ensure user exists
// router.post(
//   '/signup',
//   verifyFirebaseToken,
//   async (req: AuthenticatedRequest, res: Response) => {
//     const { uid, email, name, picture } = req.user!;
//
//     try {
//       let user = await prisma.user.findUnique({ where: { id: uid } });
//
//       if (!user) {
//         user = await prisma.user.create({
//           data: {
//             id: uid, // Firebase UID as primary key
//             email: email || '',
//             name: name || '',
//             profileImage: picture || '',
//           },
//         });
//       }
//
//       res.status(200).json({ message: 'User created or already exists', user });
//     } catch (error) {
//       console.error('Signup error:', error);
//       res.status(500).json({ message: 'Server error during signup' });
//     }
//   }
// );
//
// // 🧾 SIGN IN (basically just check if user exists)
// router.post(
//   '/signin',
//   verifyFirebaseToken,
//   async (req: AuthenticatedRequest, res: Response) => {
//     const { uid } = req.user!;
//
//     try {
//       const user = await prisma.user.findUnique({ where: { id: uid } });
//
//       if (!user) {
//         return res
//           .status(404)
//           .json({ message: 'User not found, please sign up' });
//       }
//
//       res.status(200).json({ message: 'Sign in successful', user });
//     } catch (error) {
//       console.error('Signin error:', error);
//       res.status(500).json({ message: 'Server error during signin' });
//     }
//   }
// );
//
// export default router;
