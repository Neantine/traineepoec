const SakilaDbService = require('../sakila-db-service');
const sakilaDbService = new SakilaDbService();

const ejs = require('ejs');
const fs = require('fs');

module.exports = (request, response) => {
    console.log('Matching request /films');

    sakilaDbService.findAllFilms((err, rows) => {
        if (err) {
            console.log(err);
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end("Houston we've got a problem... call us");
            return;
        }
        console.log(`Found ${rows.length} films`);

        fs.realpath(__dirname + '/../views/all-films.ejs', (err, path) => {
            if (err) {
                console.log(err);
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.end("Houston we've got a problem... call us");
                return;
            }

            console.log('found file at ', path);

            fs.readFile(path, { encoding: 'UTF-8' }, (err, data) => {
                if (err) {
                    console.log(err);
                    response.writeHead(500, {'Content-Type': 'text/html'});
                    response.end("Houston we've got a problem... call us");
                    return;
                }

                console.log("read file content ", data);
                const html = ejs.render(data, {
                    hahaha: `<script>alert('vous avez été piraté')</script>`,
                    films : rows
                });
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(html);
            });
        });
    })
};