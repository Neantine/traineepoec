/**
 * Created by Administrateur on 23/09/2016.
 */


const https = require('https');
const fs = require('fs');

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

const server = https.createServer(options, (request, response) => {
    console.log(request.headers);

    response.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    response.end('Hello from node https server');
});


server.listen(3000, () => { console.log('server listening on port 3000') });
