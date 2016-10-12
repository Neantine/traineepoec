/**
 * Created by Administrateur on 01/08/2016.
 */
//Fonctions constructeur commencent par une majuscule. Elles ne servent qu'a construire des objets.
function Person(firstName, lastName) {
    this.firstName = firstName;  //Mettre le this, sinon creation d'une variable locale a la fonction Person()
    this.lastName = lastName;
    // this.fullName = function() {
    //     return this.firstName + ' ' + this.lastName;
    // }
}

//new ConstructorFunction va :
//1/ Creer un objet vide
//2/ Appeler le constructeur ds le contexte de l'objet, equivalent de {}.Person(...,...)
//3/ Associe l'objet Person.prototype comme prototype des objets construits de ().__proto__= Person.prototype
let p1 = new Person("Bob", "Dylan");
let p2 = new Person("Jimmy", "Hendrix");

console.log(p1);
console.log(p2);

console.log({});  //Creation litterale a la volee

//Probleme: la fonction fullName va etre creee a chaque fois qu'un objet de type Person ets cree...Il faut utiliser les prototypes.
//Prototype chain (pseudo heritage)

let prototype = {
    fullName: function()
    {
        return this.firstName+''+this.lastName;

    }
};

Person.prototype = prototype;  //On ecrase le prototype mais on aurait pu l''augmenter
//ou Person.prototype.fullName = function() {return this.firstName+''+this.lastName;};