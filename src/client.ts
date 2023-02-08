import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../server/src/server';

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: 'http://localhost:2023/trpc' })],
});

export default client;
