/**
 * Created by Administrateur on 02/09/2016.
 */

SakilaDBService = require('../services/sakila-db-service');
sakilaDBService = new SakilaDBService();

var express = require('express');
const router = express.Router();

router.get('/:id', function(req, res, next) {

    sakilaDBService.findFilmById(req.params.id, (err, rows) => {
        if (err)
        {
            return next(err);
        }
        if(rows.length == 0) {
            return next();  //404: passe au midlleware suivant jusqu'au dernier qui renvoie 404 (voir app.js)
        }
        res.render('film-by-id.ejs', {film: rows[0]});   //render utilise les views pour envoyer la réponse (ici EJS)
    })

});

router.get('/', function(req, res, next) {

    sakilaDBService.findAllFilms( (err, rows) => {
        if (err)
        {
            return next(err);
        }
        if(rows.length == 0) {
            return next();
        }
        res.render('all-films.ejs', {film: rows});
    })

});

router.get('/add', function(req, res, next) { //affichage du formulaire

   //D'abord phase d'authentification eventuellement (en general un middleware placé haut)
   res.render('add-film.ejs');

});

router.post('/add', function(req, res, next) {  //traitement du formulaire
    console.log("BODY REQUEST: ",req.body);   //Le parametre du formulaire est dans le body
    if (! req.body.title || req.body.title.trim().length == 0)  //titre vide, null, ou des espaces
    {
        res.render('film-add.ejs', {error: 'Invalid title'});  //On reeaffiche le formulaire avec une erreur
    }

    sakilaDBService.addFilm(req.body.title, (err, data) => {
        if (err)
        {
            console.log(err);
            return next(err);
        }

        res.redirect('/films');  //Fait une redirection avec un code status 302

    })
});

module.exports = router;