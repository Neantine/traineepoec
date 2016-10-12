/**
 * Created by Administrateur on 03/08/2016.
 */

// voir https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

let clickDiv = document.querySelector("#surprise");  //On l'element sur lequel on veut attacher l'evenement
let clicklink = document.querySelector("#click-link");

//Les noeuds de type ELEMENT sont des EventTarget
//ainsi que l'objet Document, Window, et d'autres.

//On attache un callback a un type d'evenement sur un element
clicklink.addEventListener('click', function(e) {  //anciennement attachEvent
    console.log(e);
   //On remarque que l'event n'apparait pas ds la console: normal le lien associer "" recharge la page des qu'on clique dessus: rajouter le code qui suit :
    e.preventDefault(e);
});




clickDiv.addEventListener('click', function(e) {
    console.log(e);
});

//Ne pas ecrire : clickLink.onClick = function(e) {} car on ne pourra pas attacher d'autres callback ensuite
//Ne pas non plus mettre du javascript dans le html <div onclick="...">

/************Exercice***************/

let digitsForm = document.querySelector("#digitsform");
let textzone = document.querySelector("#digits");

//Il faut maintenant regler le pb de e.key qui est le standard courant mais qui n'est pas supporté par tous les navigateurs !
let supportedKeys = ['0','1','2','3','4','5','6','7','8','9','Backspace','Delete','ArrowLeft','ArrowRight','End','Home'];

digitsForm.addEventListener('keydown', function(e) {
    // if (e.key != 0 && e.key != 1 &&   //Verifier la spec, est-ce que key est utilisable ou deprecated? compatible avec tous les navigateurs ? (caniuse) renvoie-t il une chaine de caractere ou un seul caractere? Comment marche l'operateur de comparaison en javascript sur des chaines ou caracteres (spec ECMA, ou stackoverflow)?
    //     e.key != 2 && e.key != 3 &&
    //     e.key != 4 && e.key != 5 &&
    //     e.key != 6 && e.key != 7 &&
    //     e.key != 8 && e.key != 9)

    //voir aussi http://kangax.github.io/compat-table/es6/
    if (!supportedKeys.includes(e.key)) //Nouvelle fonctionnalité
    {
        e.preventDefault();//Empeche l'evenement d'arriver
    }
});

/**********Exercice********/
/******Implementer une fenetre qui reduit de taille qd on clique sur une icone****/
/*************************/

let clicableIcon = document.querySelector("#clicableIcon");
let reduced = false;
let hiddenText = document.querySelector("#text");

function Class0()
{

}

function reduceWindow(reduce, CSSSelector, text)
{
    let reductableText = document.querySelector(CSSSelector);

    reductableText.classList.toggle("contenthidden");

    console.log(reductableText.classList);

    if (reduce)
    {
        console.log("reduce Window");
        //reductableText.style.height = 0;
        //reductableText.removeChild(text);


        reduced = true;
    }
    else
    {
        console.log("enlarge Window");
        //reductableText.style.height = 500;
        //reductableText.appendChild(text);


        reduced = false;
    }
};

clicableIcon.addEventListener('mousedown', function(e)
    {
        console.log("icon clicked!", e);

        if (reduced) {
            clicableIcon.setAttribute("src", "http://dummyimage.com/30x30/7d1e7d/fff");
            reduceWindow(false, '#reductableTextContent', hiddenText);
        }
        else
        {
            clicableIcon.setAttribute("src", "http://dummyimage.com/10x30/7d1e7d/fff");
            reduceWindow(true, '#reductableTextContent', hiddenText);
        }
    }

);


