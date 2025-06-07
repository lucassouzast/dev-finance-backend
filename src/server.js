import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Erro ao conectar MongoDB:', err));

app.use('/api', routes);

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});
