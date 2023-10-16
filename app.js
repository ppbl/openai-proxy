import Fastify from 'fastify';
import httpProxy from '@fastify/http-proxy';
const server = Fastify();

server.register(httpProxy, {
  upstream: 'https://api.openai.com',
});

server.listen({ host: '0.0.0.0', port: 9000 }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
