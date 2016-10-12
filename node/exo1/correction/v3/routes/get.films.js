/**
 * Created by Administrateur on 31/08/2016.
 */
const SakilaDBService = require('../sakila-db-service');
const sakilaDBService = new SakilaDBService();

module.exports = (request, response) => {

    console.log("Matching request /film");

    if (request.method.toUpperCase() !== 'GET') {
        response.writeHead(405, {'Content-Type': 'text/html'});
        response.end();  //La requete ne vient probablement pas d'un navigateur
        return;
    }
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
};