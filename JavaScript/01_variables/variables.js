/**
 * Created by Administrateur on 01/08/2016.
 */

var a = 42; //Variable globale ou locale, le mot clef var est optionnel mais fortement recommandé
console.log(a);
a='Je change de type de variable et ca ne pose pas de pb!';
console.log(a);
var b;
console.log(b); //Undefined car par affectée

c='hello'; //Variable non declarée mais créée qd meme
console.log(c);

//console.log(d); //Reference error: variable inconnue, script stoppé


let maVariableES6 = 'jourbon'; //Utiliser plutot let que var (supporté par ES6)
const MA_CONSTANTE_ES6 = "le monde";

/*Le nom d'une variable doit commencer par une lettre ou un _ (underscore.js, lodash), ou un $ (jQuery)
Les caracteres suivants peuvent etre des chiffres, et des caracteres unicode.
Javascript est case sensitive
    */

//Types de base
let number=123456;
let othernumber = 56.32;
let someHexNumber = 0xff0066;
let binary = 0b01010101;
let boolean = true;
let string = 'hello';
let undef = undefined;
let iAmNull = null; //le type de null est null


/******************************/
/*Portee des variables (scope)*/
/******************************/

let globalVariable = "Je suis une variable globale";

//Difference entre var et let !!!
if(true)
{
    var pasLocaleAuIf = "pas locale au if !";
    let etMoi = "locale au if";
}
console.log(pasLocaleAuIf);
//console.log(etMoi); Ca plante car avec le mot let, la variable est locale au if

function uneFonction() {
    var uneFonctionVar1 = 1;  //locale
    let uneFonctionVar2 = 2;  //locale
    uneFonctionVar3 = 3;  //globale car declaree sans mot clef !!!
}