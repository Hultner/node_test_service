/**
 * API test - api.test.js 
 * Jest tests for the application API
 */
import server from '../src/server';
import HelloWorld from '../src/api/hello-world';

// These test against the server api and therefor have to wait for server setup
describe('HTTP Server Injection tests', () => {

    // Will error it tries to use the server before it started
    beforeAll((done) => server.once('onPostStart', done));
    afterAll(() => server.stop()); 
    

    test('Root path', async () => {
        var data = await server.inject('/');
        // Payload is returned as a string, therefor needs parsing.
        var payload = JSON.parse(data.payload);
        expect(data.statusCode).toBe(200);
        expect( payload.root ).toBe(true);
    });

    test('Invalid path', async () => {
        var data = await server.inject('/invalid-path');
        expect(data.statusCode).toBe(404);
    });

    test('hello-world path', async () => {
        var data = await server.inject('/hello-world');
        var payload = data.payload;
        expect(data.statusCode).toBe(200);
        expect(payload).toBe("Hello World!");
    });


});

// Test directly against api classes
describe('API Class tests', () => {
    
    test('hello-world test', () => {
        var hello = new HelloWorld();
        expect(hello.get()).toBe('Hello World!');
    });

});

