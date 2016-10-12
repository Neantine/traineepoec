/**
 * Created by Administrateur on 31/08/2016.
 */
const SakilaDBService = require('../v1/sakila-db-service');
const sakilaDBService = new SakilaDBService();


describe('sakila-db-service', function() {

    describe('findAllFilms', function() {
        it('should find 1000 films', function(done) {
            sakilaDBService.findAllFilms(function(err, films) {
                expect(err).toBeNull();
                expect(films.length).toBe(1000);
                done();
            })
        });
    })

    describe('findFilmById', function() {
        it('should find 1 film (ACADEMY DINOSAUR) for id 1', function(done) {
            sakilaDBService.findFilmById(1, function(err, films) {
                expect(err).toBeNull();
                expect(films.length).toBe(1);
                expect(films[0].title).toBe('ACADEMY DINOSAUR');
                done();
            })
        });
        it('should find 0 film for id 2000');
    })

})