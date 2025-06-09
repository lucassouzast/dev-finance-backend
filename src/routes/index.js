import express from 'express';
import userRoutes from './userRoutes.js';
import entriesRoutes from './entries.routes.js';

const router = express.Router();

router.use('/auth', userRoutes);
router.use('/entries', entriesRoutes);

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

export default router;
