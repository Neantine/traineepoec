module.exports = function respond(req, res, next) {


    var health = {
        'state' : 'ok'
    };

    res.contentType = 'json';


    if (req.accepts('application/xml')) {
        health = '<health><state>ok</state></health>';
        res.contentType = 'application/xml';

        console.log('RESPONSE: ', health);
        console.log('RESPONSE: ', res.contentType);
    }


    res.send(health);
    next();
};
