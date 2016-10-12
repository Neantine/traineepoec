/**
 * Created by Administrateur on 31/08/2016.
 */
const http = require('http');
const SakilaDBService = require('./sakila-db-service');
const sakilaDBService = new SakilaDBService();



const server = http.createServer(function createserverCB(request, response)
{
    console.log("Received a request ", request.url);

    //Gestion des bonnes url et de la bonne methode (cf. specs)
    if (request.method.toUpperCase() !== 'GET')
    {
        response.writeHead(405, {'Content-Type': 'text/html'});
        response.end();  //La requete ne vient probablement pas d'un navigateur
        return;
    }
    if (request.url === '/films')
    {
        console.log("Matching request /films");
        sakilaDBService.findAllFilms(function queryCB(err, result, fields) {
            if (err) {
                console.log(err); //Ici on peut logger les erreurs pour debugger mais surtout pas dans la reponse http (securité)!!!!
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.end("Petit probleme...");
                return; //Pour sortir de la callback querycallback, le connection.end se fera qd meme, car hors de la callback
            }

            console.log(`Found ${result.length} films`);

            //Il faut faire le traitement pour renvoyer du HTML ici car sinon on est hors du scope de la queryCB
            let title_table = '';

            //Attention securité lors de changement de contextes des variables (Web <-> log <-> BDD)
            for (r of result) {
                title_table += `<tr><td>${r.title}</td>
             <td>${r.description}</td><td>${r.release_year}</td></tr>`;
            }

            response.end(`<table><thead>
         <tr>
           <th>TITRE</th>
           <th>DESCRIPTION</th>
           <th>RELEASE YEAR</th>
         </tr>
       </thead>"${title_table}"</table>`);

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(title_table);


        });
    }
    else if (new RegExp('\\/films\\/\\d+$').test(request.url))   //Utiliser http://regexr.com/
    {
        console.log("Matching request /films/{film_id}");
        //Voir groupes et match en regexpr

        let splitpath = request.url.split('/');
        console.log("SPLITPATH ", splitpath);
        let film_id = splitpath[splitpath.length-1];
        console.log("FILM ID ", film_id);

        sakilaDBService.findFilmById(film_id, function queryCB(err, result, fields)
        {
            if (err)
            {
                console.log(err); //Ici on peut logger les erreurs pour debugger mais surtout pas dans la reponse http (securité)!!!!
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.end("Petit probleme...");
                return; //Pour sortir de la callback querycallback, le connection.end se fera qd meme, car hors de la callback
            }


        response.writeHead(202, {'Content-Type': 'text/html'});
        response.end('Un film');
        })
    }
    else
    {
        //Gestion des erreurs (codé en premier)
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('Page not found');
    }
});

server.listen(3000, () => { console.log("Server listening on port 3000")});
