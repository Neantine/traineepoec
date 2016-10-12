const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'sakila'
});

let SakilaDbService = function() {
};


SakilaDbService.prototype.findAllFilms = function(cb) {

    pool.query('SELECT * FROM film', function(err, rows, fields) {
        if(err) return cb(err, null);
        cb(null, rows);
    });

};

SakilaDbService.prototype.findFilmById = function(id, cb) {

    pool.getConnection(function(err, connection) {
        if(err) return cb(err, null);
        connection.query('SELECT * FROM film WHERE film_id = ?', [id], function(err, rows, fields) {
            connection.release();

            if(err) return cb(err, null);
            cb(null, rows);
        });
    });

};

SakilaDbService.prototype.addFilm = function(title, cb) {

    pool.getConnection(function(err, connection) {
        if(err) return cb(err, null);
        connection.query('INSERT INTO film SET ?', {title: title, language_id:'1'}, function(err, rows, fields) {
            connection.release();

            if(err) return cb(err, null);
            cb(null, rows);
        });
    });

};

module.exports = SakilaDbService;



