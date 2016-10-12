const SakilaDbService = require('../sakila-db-service');
//TODO éviter de créér 2 fois le SakilaDBService
const sakilaDbService = new SakilaDbService();

const ejs = require('ejs');

module.exports = (request, response) => {
    console.log('Matching request /films/{id}' );

    // autres manières de faire, voir groupes et match en RegExp, ou le module URL de node
    let path = request.url.split('/');
    let id = path[path.length - 1];
    console.log('Searching for id ', id);

    sakilaDbService.findFilmById(id, (err, rows) => {
        if (err) {
            console.log(err);
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end("Houston we've got a problem... call us");
            return;
        }

        console.log(`Found ${rows.length} films`);

        if(rows.length == 0) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end("Cette page n'existe pas");
            return;
        }

        ejs.renderFile(__dirname + '/../views/film-by-id.ejs', { film : rows[0] },
                      (err, html) => {
                            if (err) {
                                console.log(err);
                                response.writeHead(500, {'Content-Type': 'text/html'});
                                response.end("Houston we've got a problem... call us");
                                return;
                            }

                            response.writeHead(200, {'Content-Type': 'text/html'});
                            response.end(html);
                      });
    });
};