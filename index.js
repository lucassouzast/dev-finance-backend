// index.js
import './src/config/env.js';
import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/index.js'; // Ajuste se o caminho for diferente


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use('/', routes);

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ MongoDB conectado');
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
})
.catch(err => {
  console.error('❌ Erro ao conectar MongoDB:', err);
});
