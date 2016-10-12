/**
 * Created by Administrateur on 01/08/2016.
 */
function a(f) {
    console.log(f);
    console.log(f());
}

function b() {
    console.log("je suis b");
}

a(b);  //b est un parametre de a mais on ne l'execute pas

[1,2,3,4,5].forEach(function(e)
{
    console.log(e);
});

let phrase = ['bonjour','le','monde'];

let myFilterSmallerThan3 = function(s) {
    return s.length >= 3;
};


let phraseFiltered = phrase.filter(myFilterSmallerThan3);
console.log(phraseFiltered);

let mapReverse = function(s)
{
    return s.split('').reverse().join('');
};

let phraseMapped = phraseFiltered.map(mapReverse);
console.log(phraseMapped);

let stringReducer = function(acc, cur) {
    return acc+cur;
};

let result = phraseMapped.reduce(stringReducer);
console.log(result);

/*********************************/
//Collection pipeline (design pattern)
let resOneLine = phrase.filter(myFilterSmallerThan3).map(mapReverse).reduce(stringReducer);
/*********************************/

//Exercice: calculer la somme des carrés pour les nombres pair du tableau [1,2,3,4,5,6,7,8,9,10]
let numbersArray = [1,2,3,4,5,6,7,8,9,10];

function pairFilter(n)
{
    return (n%2 == 0);
};

let carresFct = function(n)
{
    return (n*n);
};

//Foreach ne renvoie pas de resultat contrairement a map qui transforme chaque element du tableau et renvoie un tableau

let pairsArray = numbersArray.filter(pairFilter);
console.log(pairsArray);

let carresArray = pairsArray.map(carresFct);
console.log(carresArray);

let sumCarres = carresArray.reduce(stringReducer);
console.log(sumCarres);

//Solution du prof
res = numbersArray.filter(function(e) {
    return e%2 == 0;
})
    .map(function(e) {
    return e*e;
})
.reduce(function(acc, e) {
    return acc+e;
}, 0); //Valeur de depart

