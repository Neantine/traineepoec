/**
 * Created by Administrateur on 01/08/2016.
 */

let prototype = {
    f: function() {
        console.log('hello');
    }
};

let o = Object.create(prototype);  //2eme parametre pour definir les proprietes de l'objet
console.log(o);

let test = window.create(prototype);
console.log(test);