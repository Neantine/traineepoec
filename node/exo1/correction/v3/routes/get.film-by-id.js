/**
 * Created by Administrateur on 31/08/2016.
 */
const SakilaDBService = require('../sakila-db-service');
const sakilaDBService = new SakilaDBService();  //TODO: trouver un moyen de ne pas avoir une instance de ce service a chaque route...

module.exports = (request, response) => {

    console.log("Matching request /film/{id}");
    let splitpath = request.url.split('/');
    console.log("SPLITPATH ", splitpath);
    let film_id = splitpath[splitpath.length-1];
    console.log("FILM ID ", film_id);

    if (new RegExp('\\/films\\/\\d+$').test(request.url))   //Utiliser http://regexr.com/
    {
        sakilaDBService.findFilmById(film_id, function queryCB(err, result, fields)
        {

            if (err)
            {
                //Gestion des erreurs (codé en premier)
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.end('Page not found');
                console.log(err); //Ici on peut logger les erreurs pour debugger mais surtout pas dans la reponse http (securité)!!!!

                return; //Pour sortir de la callback querycallback, le connection.end se fera qd meme, car hors de la callback
            }
            else
            {
                response.writeHead(202, {'Content-Type': 'text/html'});
                response.end('Un film');
            }
        })
    }
    else
    {
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.end("Petit probleme...");
        return;
    }
};