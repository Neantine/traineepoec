/**
 * Created by Administrateur on 31/08/2016.
 */
const mySQL = require("mysql");
const pool = mySQL.createPool({
    connectionLimit : '10',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila',
});

//Fonction constructeur
let SakilaDBService = function() {

};

SakilaDBService.prototype.findAllFilms = function(callback)
{

    pool.query("SELECT * FROM film", function queryCB(err, rows, fields) {
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });

};


SakilaDBService.prototype.findFilmById = function(film_id, callback)
{

    pool.getConnection(function(err, connection) {
        if (err) {
            return callback(err, null);
        }
        connection.query("SELECT * FROM film WHERE film_id = ?", [film_id], function queryCB(err, rows, fields) {
            connection.release();
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        });
    });

};

module.exports = SakilaDBService;