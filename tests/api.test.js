//import server from '../src/server';
import HelloWorld from '../src/api/hello-world';
// import http from 'http';

//console.log(server);

test('hello-world test', () => {
    var hello = new HelloWorld();
    expect(hello.get()).toBe('Hello World!');
});

// test('hello-world test', async () => {
//     let data = await fetchApi('/hello-world');
//     expect(data).toBe('Hello world!');
// }

