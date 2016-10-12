/**
 * Created by Administrateur on 01/08/2016.
 */

//On peut definir une fonction dans une fonction
function a()
{
    function b() {
        console.log("je suis la fonction b, je suis une closure");
    }

    b();
}

a();
//b(); ceci plante car seulement defini dans le scope de a

function multiplyBy(val) {
    function multiplyByVal(n) {  //closure: elle a acces aux variables de sa outer function
                                 //ces variables vivent tant que la inner function vit.
        return val*n;
    }
    return multiplyByVal;
}

let mult3 = multiplyBy(3); //ca cree une fonction particuliere avec comme valeur de val la valeur capturee
let mult4 = multiplyBy(4);

console.log(mult3);
console.log(mult4);

console.log(mult3(5));
console.log(mult4(5));

//Utilisé en design pattern factory par ex