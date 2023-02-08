import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from '@trpc/client/dist/links';
import { AppRouter } from '../server/src/server';

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: import.meta.env.SERVER_URL })],
});

async function main() {
  const result = await client.sayHi.query();
}

main();
