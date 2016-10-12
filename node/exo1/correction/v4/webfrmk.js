const Router = require('./router');
const http = require('http');
class Webfrmk {

    constructor() {
        this.router = new Router();
        this.server = http.createServer((request, response) => {
            console.log("Received a request: ", request.url);

            const route = this.router.find({'method': request.method, 'url': request.url});
            console.log("Matched route: ", route);

            if(route == null) {
                response.writeHead(404, {'Content-Type' : 'text/html'});
                response.end('Page not Found :-/');
                return;
            }

            route.handler(request, response);
        });
    }

    get (url, handler) {
        this.router.add( { 'method': 'GET', 'url': url }, handler);
    }

    listen (port, cb) {
        this.server.listen(port, cb);
        return this.server;
    }

}

module.exports = Webfrmk;