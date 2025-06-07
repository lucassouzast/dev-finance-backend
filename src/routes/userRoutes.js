import express from 'express';
import { register, login } from '../controller/usersControllers.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Rota protegida para testar o token
router.get('/check-token', authMiddleware, (req, res) => {
  res.json({ message: 'Token válido!', userId: req.userId });
});

export default router;
