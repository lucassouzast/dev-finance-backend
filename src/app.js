import express from 'express';
import cors from 'cors';
import entriesRoutes from './routes/entries.routes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/entries', entriesRoutes);
app.use('/auth', userRoutes);

export default app;
