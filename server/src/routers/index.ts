import { t } from '../trpc';
import { userRouter } from './users';

export const appRouter = t.router({
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
  users: userRouter,
});
