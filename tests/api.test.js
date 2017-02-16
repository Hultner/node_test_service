import server from '../src/server';
import HelloWorld from '../src/api/hello-world';
// import http from 'http';

//console.log(server);
describe('HTTP Server Injection tests', () => {

    beforeAll((done) => server.once('onPostStart', done));
    
    afterAll(() => server.stop()); 
    

    test('Injection test', async () => {
        var data = await server.inject('/');
        expect(data.statusCode).toBe(200);
    });

});

describe('API Class tests', () => {
    
    test('hello-world test', () => {
        var hello = new HelloWorld();
        expect(hello.get()).toBe('Hello World!');
    });

});

// test('hello-world test', async () => {
//     let data = await fetchApi('/hello-world');
//     expect(data).toBe('Hello world!');
// }

