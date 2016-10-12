/**
 * Created by Administrateur on 01/08/2016.
 */

/*Hoisting = hisser.*/
/*Premiere lecture definition des variables et fonctions, 2eme lecture execution*/

console.log(a);  //Il connait a apres la premiere lecture mais ne connait pas sa valeur
var a = 3;

mafonction();

function maFonction()
{
    console.log("on est dedans");
}

autreFonction();

var autreFonction = function()
{
    console.log('une autre fct');
}
