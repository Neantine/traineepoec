/**
 * Created by Administrateur on 29/08/2016.
 */
const faker = require('faker'); //utilise le module faker depuis node_modules (s'il ne le trouve pas dans nos propres modules)

module.exports = (request, response) => {
  console.log(request.headers);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`<img src="${faker.image.image()}">`);  //Attention cet appel est synchrone et va bloquer la call stack !
};