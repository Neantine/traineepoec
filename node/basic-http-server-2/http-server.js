/**
 * Created by Administrateur on 29/08/2016.
 */
const http = require('http');
const requestListener = require('./request-listener');

const server = http.createServer(requestListener);

server.listen(3000, ()=> {console.log('server listening on port 3000');});