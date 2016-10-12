/**
 * Created by Administrateur on 23/09/2016.
 */


const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.headers);

    response.writeHead(200,{
        'Set-Cookie': 'mycookie=test',
        'Content-Type': 'text/plain'
    });
    response.end('Hello from node http server');
});

server.listen(3000, () => { console.log('server listening on port 3000') });