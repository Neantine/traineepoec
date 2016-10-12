/**
 * Created by Administrateur on 01/08/2016.
 */

//Immediatly Invoked Function Expression

//Les parentheses forment une expression qui est evaluee
//(function) evaluee et puis executee avec ();
//Immediatement evaluee et executee
//Utilisé par les transpileurs (convertir du code vers javascript 6)

(function () {
    console.log("coucou je suis une iife");

})();

//Permet d'avoir des variables locales a une librairie (code modulaire)
//Les variables locales ne polluent pas l'environnement mais la fct est bien executee
(function() {
    var a=5;
    var b=1;

    console.log(a+b);
}

)();
