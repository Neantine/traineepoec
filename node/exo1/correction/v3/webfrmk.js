/**
 * Created by Administrateur on 31/08/2016.
 */


const Router = require('./router');
const http = require('http');

let WebFrmk = function() {

    console.log('webfmk CONSTRUCTOR');

    this.router = new Router();

    this.server = http.createServer((request, response) =>
    {
        r = this.router.find({'method': request.method, 'url': request.url});

        if (r == null)
        {
            response.writeHead(404, {'Content-Type' : 'text/html'});
            response.end('Page not found');
            return;
        }

        console.log('Route found: ', r);
        r.handler(request, response);
    });
};



WebFrmk.prototype.get = function(url, handler) {

    console.log('webfmk GET');

    console.log("ROUTER: ", this.router);

    this.router.add({'method': 'GET', 'url': url}, handler);

};



WebFrmk.prototype.listen = function(port, callback) {

    this.server.listen(port, callback);   //Design pattern Delegate
    return this.server;
};


module.exports = WebFrmk;