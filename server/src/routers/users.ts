import { t } from '../trpc';
import { z } from 'zod';

const userProcedure = t.procedure.input(z.object({ id: z.number(), name: z.string() }));

export const userRouter = t.router({
  getUser: userProcedure.query(() => {
    return { id: 1, name: 'John Doe' };
  }),
});
