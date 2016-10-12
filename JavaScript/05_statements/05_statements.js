/**
 * Created by Administrateur on 01/08/2016.
 */
/*Instructions habituelles: if else switch for while do..while label break continue

 */

for (var i=0; i<10; i++)
{
    console.log("dans la boucle: ", i);
}

//Attention avec var le seul scope est function (avec let, i aurait ete local a la boucle)
console.log("Hors de la boucle: ", i);

let myArray = ["Bonnsoiwr ", "Elliot ", "..."];
for (let i=0; i<myArray.length; i++)
{
    console.log(myArray[i]);
}

//Attention, ne pas utiliser for..in sur un tableau, a utiliser sur les proprietes ennumerables d'un objet..
// et l'ordre d'iteration n'est pas garanti...
myArray.somethingMore = "hello";
Object.prototype.somethingMoreOnObject = "world";
for (let i in myArray)
{
    console.log(i, myArray[i]);
}

//ES6
for (let i of myArray)
{
    console.log(i);
}

//forEach
myArray.forEach(function(e)
{
    console.log("forEach ", e);
});

