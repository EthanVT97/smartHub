import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import telegramRouter from './routes/telegram';
import viberRouter from './routes/viber';
import { initQueue } from './queue';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/telegram', telegramRouter);
app.use('/api/viber', viberRouter);

app.get('/', (_req, res) => {
  res.send('SmartBotHub backend is running!');
});

initQueue();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});