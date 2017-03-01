/**
 * Server
 * Module containing a server for a node hapi rest api
 */
// @flow

import Hapi from 'hapi';
import routes from './routes';

const server = new Hapi.Server();

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

// Import all external routes from api
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
    server.emit('onPostStart', 'hello');
});

export default server;
