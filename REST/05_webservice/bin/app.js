const api = require('../api');

api.listen(8081, function() {
    console.log('%s listening at %s', api.name, api.url);
});