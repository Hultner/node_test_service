import Hapi from 'hapi';
import HelloWorld from './api/hello-world';

const server = new Hapi.Server();
const hello = new HelloWorld;

server.connection({
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply({root:true});
    }
});

server.route({
    method: 'GET',
    path: hello.path(),
    handler: (request, reply) => {
        reply(hello.get(request));
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

