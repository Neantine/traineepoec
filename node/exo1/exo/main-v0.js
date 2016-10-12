/**
 * Created by Administrateur on 29/08/2016.
 */

const http = require('http');

const httpserver = http.createServer( (request, response) => {

    console.log("CREATE SERVER: received a request"); //On passe ds la fonction callback du parametre de createServer a chaque requete recue

    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'sakila',
        debug: 'true'
    });


    connection.connect(function(error) {

        console.log(error);

        let sqlQuery = '';
        let url = request.url;
        console.log("URL", url);

        let suburl = url.split('/');
        console.log("SUBURL ", suburl);

        if (suburl[1] == 'films' && suburl.length <= 3) {

            if (suburl.length == 3 && !isNaN(suburl[2])) {
                sqlQuery = 'SELECT * FROM film WHERE film_id = ' + suburl[2];
            }
            else if (suburl.length == 2 && suburl[1] == 'films') {
                sqlQuery = 'SELECT * FROM film';

            }
            else {
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.end("Bad request url");
                return;
            }
        }
        else {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end("Bad request url");
            return;
        }


        connection.query(sqlQuery, function (err, result, fields) {
            if (err) throw err;

            response.writeHead(200, {'Content-Type': 'text/html'});

            let size = result.length;

            let title_table = '';

            for (let i = 0; i < size; i++) {
                title_table += `<tr><td>${result[i].title}</td>
                 <td>${result[i].description}</td><td>${result[i].release_year}</td></tr>`;
            }

            response.end(`<table><thead>
             <tr>
               <th>TITRE</th>
               <th>DESCRIPTION</th>
               <th>RELEASE YEAR</th>
             </tr>
           </thead>"${title_table}"</table>`);
        });

        connection.end(function() {

        });
    })

});



httpserver.listen(3000, () => {
    console.log('server listening on port 3000')
});














