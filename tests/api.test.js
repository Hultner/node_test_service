import server from '../src/server';
import HelloWorld from '../src/api/hello-world';

describe('HTTP Server Injection tests', () => {

    beforeAll((done) => server.once('onPostStart', done));
    afterAll(() => server.stop()); 
    

    test('Root path', async () => {
        var data = await server.inject('/');
        expect(data.statusCode).toBe(200);
    });

    test('Invalid path', async () => {
        var data = await server.inject('/invalid-path');
        expect(data.statusCode).toBe(404);
    });


});

describe('API Class tests', () => {
    
    test('hello-world test', () => {
        var hello = new HelloWorld();
        expect(hello.get()).toBe('Hello World!');
    });

});

