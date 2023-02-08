import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import config from './config';
import morgan from 'morgan';
import { appRouter } from './routers';

const app = express();

const { PORT, ENV } = config;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

if (ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/trpc', createExpressMiddleware({ router: appRouter }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${ENV} mode`);
});

export type AppRouter = typeof appRouter;
