import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'Rota register funcionando!' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Rota login funcionando!' });
});

export default router;
