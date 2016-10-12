/**
 * Created by Administrateur on 01/08/2016.
 */

//Autre facon de definir les fonction, code réduit, simplifie l'ecriture (et lexical this, ne bind pas son propre this... cf plus tard)

let data = [1,2,3,4,5,6,7,8,9,10];
let res = data.filter(e => e%2 == 0)
          .map(e => e * e )
.reduce((acc, e) => acc+e, 0);

console.log(res);

let helloWorld = () => {console.log("hello world") };