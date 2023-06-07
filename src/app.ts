import express, { Express } from 'express';
import modeRouter from './routes/mode/mode.router.js';

const app: Express = express();

app.use(express.json());
app.use('/mode', modeRouter);

export default app;
