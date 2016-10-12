/**
 * Created by Administrateur on 05/08/2016.
 */

fetch('http://uifaces.com/api/v1/random')   //par defaut requete GET
    .then(response => response.json())
    .then(json => console.log(json));