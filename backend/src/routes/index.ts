import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';
import authRoutes from './auth';
import calendarRoutes from './calendar';
import userRoutes from './user';
// import more route files like usersRoutes, calendarRoutes, etc.

const router = Router();

// Keeps track of time on website
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Mount routes
router.use('/auth', authRoutes);
router.use('/calendar', calendarRoutes);
router.use('/user', userRoutes);

export default router;
