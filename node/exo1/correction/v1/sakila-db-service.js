/**
 * Created by Administrateur on 31/08/2016.
 */
const mySQL = require("mysql");


//Fonction constructeur
let SakilaDBService = function() {

};

SakilaDBService.prototype.findAllFilms = function(callback)
{
    const connection = mySQL.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'sakila',
    });
    connection.connect();

    connection.query("SELECT * FROM film", function queryCB(err, rows, fields) {
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });

    connection.end();
};


SakilaDBService.prototype.find = function(film_id, callback)
{
    const connection = mySQL.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'sakila',
    });
    connection.connect();

    connection.query("SELECT * FROM film WHERE film_id = ?", [film_id], function queryCB(err, rows, fields) {
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });

    connection.end();
};

module.exports = SakilaDBService;