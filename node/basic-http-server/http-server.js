/**
 * Created by Administrateur on 29/08/2016.
 */
//console.log(require('http'));  //console.log utilise util.inspect et renvoie un objet javascript "depilé"
const http = require('http');  //renvoie un objet avec ses clefs pour acceder aux champs
//console.log(http.Server);
//console.log(http.createServer); //Factory pour creer un serveur http, cree un handler pour toutes les requetes http entrantes

const server = http.createServer( (request, response) =>

{
    console.log('une requete est arrivee', request.headers);
    response.writeHead(200);
    response.end('Hello from Node http server');
});


server.listen(3000, () => {console.log('server listening on port 3000')});
