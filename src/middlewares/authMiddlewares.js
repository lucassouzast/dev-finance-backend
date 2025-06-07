import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: 'Token não fornecido' });

  const parts = authHeader.split(' ');

  if (parts.length !== 2)
    return res.status(401).json({ error: 'Token mal formatado' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: 'Token mal formatado (Bearer)' });

  try {
    const decoded = jwt.verify(token, secret);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
