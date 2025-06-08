import jwt from 'jsonwebtoken';

export const getUserIdFromToken = (req) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new Error('Token não fornecido');

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id; // ou decoded._id dependendo de como você gera o token
  } catch (err) {
    throw new Error('Token inválido');
  }
};
