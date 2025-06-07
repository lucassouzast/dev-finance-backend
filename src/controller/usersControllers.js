const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = {
  async register(req, res) {
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
  },

  async login(req, res) {
    const { email, senha } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

      const isPasswordValid = await bcrypt.compare(senha, user.senha);
      if (!isPasswordValid) return res.status(400).json({ error: 'Senha inválida' });

      const token = jwt.sign({ id: user._id }, secret, { expiresIn: '7d' });

      res.json({ user: { id: user._id, nome: user.nome, email: user.email }, token });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  },
};
