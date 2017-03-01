/**
 * Server
 * Module containing a server for a node hapi rest api
 */
// @flow

import Hapi from 'hapi';
// import HelloWorld from './api/hello-world';
import routes from './routes';

const server = new Hapi.Server();
//const hello = new HelloWorld();

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

// server.route(
//     {
//         method: 'GET',
//         path: hello.path(),
//         handler: (request, reply) => {
//             reply( (hello.get(request): string) );
//         }
//     }
// );

// Import all external routes from api
// console.log(routes);
//routes.map(server.route);

routes.map( route => server.route(route) );

// Register event channel
server.event('onPostStart');

server.start( err => {
    if (err) {
        // TODO: Add more robust and persistent error handling
        console.error( 'Error was handled!');
        console.error(err);
    }

    console.log('Server started at ' + server.info.uri );

    // Emit event announcing that the server have started
    server.emit('onPostStart', 'hello');
});

export default server;
