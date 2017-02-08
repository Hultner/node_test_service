import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection( {
    port: 8000
});

server.route({
    method: 'GET',
    path: '/hello-world',
    handler: (request, reply) => {
        reply('Hello world!');
    }
});
