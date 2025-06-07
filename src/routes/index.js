import express from 'express';
import userRoutes from './userRoutes.js';
import entriesRoutes from './entries.routes.js';

const router = express.Router();

router.use('/auth', userRoutes);
router.use('/entries', entriesRoutes);

export default router;
