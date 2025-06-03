import express from 'express';
import cors from 'cors';
import entriesRoutes from './routes/entries.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/entries', entriesRoutes);

export default app;
