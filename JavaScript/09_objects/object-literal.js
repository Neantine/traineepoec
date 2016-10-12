/**
 * Created by Administrateur on 01/08/2016.
 */
//creation literale d'un objet
//Le mecanisme des classes n'existe pas, et un objet est en fait un ensemble d'association clef-valeur (comme une hashmap)
    //Pour construire des objets on utilisera une function-constructor (cf function-constructor.js)
let o = {

};
console.log(o);

o.title = 'un titre';  //On peut creer dynamiquement des proprietes (augmenter)...
console.log(o);
console.log(o.title);
console.log(o.doesnotexist);  //Ne cree rien (heureusement qd mme...)

o.uneMethode = function()
{
    console.log("Je suis une methode de l'objet o");
};

console.log(o.uneMethode);
o.uneMethode();

//On peut aussi definir des proprietes et methodes en syntaxe litterale
let o2 = {
    title:'le titre de o2',
    uneMethode: function() {
        console.log('Je suis une methode de o2');
    }
};

let o3 = {
"un nom complexe": "possible avec des guillemets mais pas une bonne idee"
};

console.log(o3["un nom complexe"]); //Et on y accede de cette maniere
let s = "title";
console.log(o2[s]); //acces dynamique aux proprietes

for (let p in o2) {
console.log(p, o2[p]);
}

var thomas = {
    firstName:'Thomas',
    lastName:'Gros',
    fullName: function() {
        return this.lastName + ' ' + this.firstName;  //Attention piege il faut specifier this sinon on cree une propriete globale (sur window.)
    }
};

console.log(thomas.firstName);
console.log(thomas.lastName);
console.log(thomas.fullName());

let f = thomas.fullName;
console.log(f());  //Attention a this..ici this est window! Attention au scope...


//