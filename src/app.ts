import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/status', async (req: Request, res: Response) => {
  res.send("I'm alive");
});

export default app;
