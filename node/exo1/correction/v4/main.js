const Webfrmk = require('./webfrmk');

const webfrmk = new Webfrmk();

webfrmk.get('/films', require('./routes/get.films'));
webfrmk.get('/films/:id', require('./routes/get.film-by-id'));

let server = webfrmk.listen(3000,
                            () => { console.log('server listening on port 3000') });