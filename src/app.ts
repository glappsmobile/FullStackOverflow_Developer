import './setup.ts';
import express, { Request, Response } from 'express';
import cors from 'cors';
import usersRouter from './routers/users.router';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/status', async (req: Request, res: Response) => {
  res.send("I'm alive");
});

app.use('/users', usersRouter);

export default app;
