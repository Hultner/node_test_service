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

server.start( err => {
    if (err) {
        // TODO: Add more robust and persistent error handling
        console.error( 'Error was handled!');
        console.error(err);
    }
    console.log("Server started at " + server.info.uri );
});
