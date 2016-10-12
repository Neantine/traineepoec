/**
 * Created by Administrateur on 03/08/2016.
 */

/*https://www.w3.org/TR/uievents/#event-flow*/

let outerDiv = document.querySelector('.outer');
let innerDiv = document.querySelector('.inner');

outerDiv.addEventListener('click', function(e) {

    //e.currentTarget est l'element sur lequel le listener s'est declenché pdt la propagation de l'event
    //e.target est l'element sur lequel on a cliqué

    console.log('click outer');
    e.stopPropagation(); //empeche l'event de se propager aux enfants cancelBubble
}, true);  //use capture phase


innerDiv.addEventListener('click', function(e) {

    console.log('click inner');
} , true); //use capture phase

//Attention quelques events ne font pas les 2 phases, comme les formulaires
//Penser a faire un removeListener si on n'a plus besoin d'un listener