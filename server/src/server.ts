import express from 'express';
import { initTRPC } from '@trpc/server';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import config from './config';
import morgan from 'morgan';

const app = express();

const { PORT, ENV } = config;

const t = initTRPC.create();

const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return 'Hello World';
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === 'string') return v;

      throw new Error('invalid input');
    })
    .mutation((req) => {
      console.log(req.input);
      return true;
    }),
});

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
