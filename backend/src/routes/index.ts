import { Router } from 'express';
import authRoutes from './auth';
// import more route files like usersRoutes, calendarRoutes, etc.

const router = Router();

// Mount routes
router.use('/auth', authRoutes);

// Example: router.use('/users', usersRoutes);
// Example: router.use('/calendar', calendarRoutes);

export default router;
