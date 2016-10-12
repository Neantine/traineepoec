const chai = require('chai');
const expect = chai.expect;

const request = require('supertest');
const api = require('../api');

var server;

before(function listen(done) {
    server = api.listen(0, function listening() {
        console.log('test server listening on http://localhost:' + server.address().port);
        done();
    });
});

after(function (done) {
    server.close( function() {
        done();
    });
});

describe('api', function() {
    describe('GET /health', function() {

        it('should return {"state":"ok"}', function(done) {
            request(server)
                .get('/health')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect('{"state":"ok"}') // supertest sait tester le body directement
                .expect(function(res) { // supertest nous permet aussi de déclencher nos propres tests
                    expect(res.body).to.deep.equal({"state":"ok"});
                })
                .end(done);
        })


        it('should return <health><state>ok</state></health>', function(done) {
            request(server)
                .get('/health')
                .set('Accept', 'application/xml')
                .expect(200)
                .expect('Content-Type', 'application/xml')
                .expect('<health><state>ok</state></health>') // supertest sait tester le body directement
                //.expect(function(res) { // supertest nous permet aussi de déclencher nos propres tests
                  //   expect(res.body).to.deep.equal("<health><state>ok</state></health>");
                 //})
                .end(done);
        })

    })
});

