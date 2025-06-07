import User from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export async function register(req, res) {
  const { nome, email, senha } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ error: 'Usuário já existe' });

    const hashedPassword = await bcrypt.hash(senha, 10);



    const user = await User.create({ nome, email, senha: hashedPassword });

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '7d' });

    res.json({ user: { id: user._id, nome, email }, token });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
}

export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

    const valid = await bcrypt.compare(senha, user.senha);
    if (!valid) return res.status(400).json({ error: 'Senha inválida' });

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '7d' });

    res.json({token});
  } catch (err) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
}
