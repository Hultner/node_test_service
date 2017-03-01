/* Routes
 * 
 * Some kind of future api abstraction layer which will allow to us to define 
 * routes for hapi from api classes.
 * Still working out exactly how we want to implement this, prefably in a 
 * portable way.
 */ 
import HelloWorld from './api/hello-world';
const hello = new HelloWorld();

import Personnel from './api/personnel';
const personnel = new Personnel();

const routes = generateRoutes();

function generateRoutes(){
    //If function get post put delete@path
    return [
         
        {
            method: 'GET',
            path: hello.path(),
            handler: (request, reply) => {
                reply( (hello.get(request): string) );
            }
        },

        
        {
            method: 'GET',
            path: personnel.path(),
            handler: (request, reply) => {
                reply( (personnel.read(request): Object) );
            }
        },

        {
            method: 'POST',
            path: personnel.path(),
            handler: (request, reply) => {
                reply( (personnel.create(request): Object) );
            }
        },

        {
            method: 'UPDATE',
            path: personnel.path()+'/{id}',
            handler: (request, reply) => {
                reply( (personnel.update(request): Object) );
            }
        },

        {
            method: 'DELETE',
            path: personnel.path()+'/{id}',
            handler: (request, reply) => {
                reply( (personnel.delete(request): Object) );
            }
        }
    ];
}

export default routes;
