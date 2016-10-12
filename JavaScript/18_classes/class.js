/**
 * Created by Administrateur on 05/08/2016.
 */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }

    static staticFct()
    {

    }
};

console.log(typeof Person); //function!

//Heritage
class PersonWithAge extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }
}

//Ecriture equivalente a:
//
//function Person(firstName, lastName) {this.firstName = firstName; this.lastName = lastName;}
//Person.prototype.fullName = function() { return `${this.firstName} ${this.lastName}`};
//Person.staticFct = function() {};
//Object.getPrototypeOf(PersonWithAge) === Person //test pour voir si Person est la mere de PersonWithAge
//On ne peut pas definir simplement un heritage avec les methodes constructeurs (on peut mais c'est compliqué car on n'a pas acces au prototype,
// voir la doc gestion d'erreurs pour voir la syntaxe)


