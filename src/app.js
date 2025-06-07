import express from 'express';
import cors from 'cors';
import entriesRoutes from './routes/entries.routes.js';
import userRoutes from './routes/userRoutes.js'; // adicione esta linha

const app = express();

app.use(cors());
app.use(express.json());

app.use('/entries', entriesRoutes);
app.use('/api/auth', userRoutes); // adicione esta linha

export default app;
