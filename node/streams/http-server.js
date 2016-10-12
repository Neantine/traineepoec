/**
 * Created by Administrateur on 12/09/2016.
 */
const http = require("http");

const server = http.createServer((request, response) => {

    //TODO : regarder le header content-length, si pas present bad request 400

    const body = [];

    request.on('data', (chunk) => {
        console.log('recieved some data', chunk);
        body.push(chunk);
    });

    request.on('end', () => {
        const fullBody = Buffer.concat(body);
        console.log(fullBody);
        console.log(fullBody.toString());
        console.log(fullBody.toString('utf-8'));
        //console.log(JSON.parse(fullBody.toString('utf-8'));
        console.log('no more data');
        response.end('done :)');
    })
});

server.listen(3000, ()=>console.log('listening on port 3000'));