/**
 * Created by Administrateur on 05/08/2016.
 */
//Le standard ES6 suit l'approche 'promises A+' https://promisesaplus.com/
//Il existe d'autres librairies de promises Q, BlueBird...

//Une promise est objet qui est le resultat eventuel d'une operation asynchrone
//Une promise est un objet 'thenable'
//Une promise est le resultat eventuel d'un fetch
    //Une promise a 3 etats :pending, resolved, rejected

//Creation d'une promise
// let p = new Promise(function(resolve, reject) {
//
//     //faire traitement (creation du xhr, listener..etc)
//
//     if (/*condition*/) {  //promise fullfilled
//         resolve();
//     }
//     else //promise rejected
//         {
//             reject();
//         }
//     }
// );

// Promise.resolve(42); //ca cree une immediatly resolved promise, equivalent a ecrire let p = new Promise(function(resolve, reject) { resolve(42); });
// Promise.reject(new Error('oups..')); //creer une immediatly rejected promise


/***Consommer une promise***/
let p = Promise.resolve(42); //une promise immediatly resolved
// Le parametre du then est le resolve, donc avec val = 42
p.then(val => val+1)  //Si la fonction resolve renvoie un resultat, alors c'est automatiquement une promise, donc on peut faire encore un then
.then(val => console.log(val)) //val vaut 43 et function(val) { return Promise.resolved(undefined) }
.then(val => console.log(val)) //undefined (retour de console)

let p2 = Promise.resolve('hello');
console.log('before');
p2.then(str => console.log(str));
console.log('after');

//Tout ce qui est dans then est mis dans la callback queue, et est asynchrone

/**********TP: reecrire la fonction fecth***/

function myFetch(url)
{
    let pr = new Promise(function(resolve, reject) {   //!!!*******!!!***la fonction function est immediatement executé,
                                                       // mais le xhr et la methode resolve (wrapper autour de la fct qui est passee en parametre du then qd on appelle myFetch)
                                                        // est mis dans le thread web API et ds la callstack queue
        let xhr=new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                resolve(xhr.responseText);
            }
        };
        xhr.send();
    });


    //On sait que fetch renvoie une promise
    return pr;
}

myFetch('').then(data => console.log(data));

/**gestion des erreurs***/
let randomP = new Promise(function(resolve, reject) {
   let random = Math.random(); //Objet global
    if (random < 0.5) { //remarque il n'y a que des float en javascript
        resolve('promise resolved');
    }
    else {
        reject('promise rejected');
        //throw new Error('promise rejected')
        //reject(new Error('promise rejected')
    }
});

randomP.then(val => console.log("ici c'est resolu", val), val => console.log("ici c'est rejected", val));

//au lieu de .then(resolved, rejected) il faut ecrire then(resolved).catch(rejected)
//ecrire plutot:
randomP.then(val => console.log("ici c'est resolu", val)).catch(val => console.log("ici c'est rejected", val));
//du coup si la promise est rejected, on passe au catch et pas au then (s'il y en avait d'autres par ex p.then.then.catch.then)