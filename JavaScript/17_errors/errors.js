/**
 * Created by Administrateur on 05/08/2016.
 */

let myErr = new Error();
myErr.propriete = 'nouvelle propriete';
console.log(myErr);
console.log('error created');

//throw myErr; //ou throw new Error(); comme ca rien ne peut modifier l'erreur creee avant qu'elle soit jetee
//console.log('error thrown'); //Ne sera pas executé puisque une erreur a ete thrown juste au dessus
//faisons plutot

try {
    throw myErr;
    console.log('error thrown');  //unreachable
} catch (e) {
    if (e instanceof SyntaxError)  //on peut traiter differement les erreurs selon leur type, meme CustomError
    {

    }
    else if (e instanceof ReferenceError)
    {

    }
    else {
        console.log('inside catch block: error catched');
        console.log(e);
    }

} finally {
    console.log("executé dans tous les cas");
}

console.log("after try-catch block");


//Exemple: propagation des erreur
//On peut voir la call stack ds le debugger
//On aurait pu mettre l'appel de b dans un try/catch, ou l'appel de a(), a la fin c'est le main qui renvoie l'erreur
function a() {
    console.log('avant b');
    b();
    console.log('apres b');
}

function b()
{
    throw new Error('erreur dans fonction b');
}

a();