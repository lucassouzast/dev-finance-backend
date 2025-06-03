import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import app from './src/app.js'; // seu app Express

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
