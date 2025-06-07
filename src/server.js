const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/devfinance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Erro ao conectar MongoDB:', err));

const routes = require('./routes'); // importa routes/index.js
app.use('/api', routes); // prefixo /api para todas as rotas

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});
