import server from '../src/server';
import HelloWorld from '../src/api/hello-world';

describe('HTTP Server Injection tests', () => {

    beforeAll((done) => server.once('onPostStart', done));
    afterAll(() => server.stop()); 
    

    test('Root path', async () => {
        var data = await server.inject('/');
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

describe('API Class tests', () => {
    
    test('hello-world test', () => {
        var hello = new HelloWorld();
        expect(hello.get()).toBe('Hello World!');
    });

});

