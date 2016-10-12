/**
 * Created by Administrateur on 02/08/2016.
 */

//Document Object Model
//Interface pour manipuler des documents
//Anciennement nommé Dynamic HTML (D-HTML)
//Arbre dont les noeud sont les elements du document (structure arborescente)
//On peut voir dans Development tool/Elements
//Interface neutre par rapport a HTML

 //console.log(document.childNodes); //DOCTYPE
 //console.log(document.childNodes[1]); //html
 //console.log(document.childNodes[1].childNodes);

//Ctrl+clic pour acceder a la doc

function displayElementsName(nodeList)
{
    for (let i=0; i<nodeList.length; i++)
    {
        //console.log(nodeList.length+" ", i);

        if (nodeList[i].nodeType === Node.ELEMENT_NODE)
        {
            //Tests inutiles car tout noeud de type ELEMENT a un name (cf spec https://www.w3.org/TR/domcore/)
            //Meme chose pour les attributs

            // if (nodeList[i].name === undefined)
            //     console.log(nodeList[i].localName+" ");
            // else
                console.log(nodeList[i].name+" ");
                // let attributes = nodeList[i].attributes;
                // let attrStr = "";
                // for (let j=0; j<attributes.length; j++)
                // {
                //     attrStr += attributes.item(j).nodeValue;

                /**********/
                //avec ES6 template string on peut ecrire : attrStr += `${attributes.item(j).nodeName} = `{attributes.item(j).nodeValue`;
                /*********/

                // }
                // console.log(attrStr+" ");


        }
        //else
        {
            //console.log("Not an Element node ", nodeList[i]);
            displayElementsName(nodeList[i].childNodes);
        }
    }
}

if (document.hasChildNodes())
{
    console.log("displayElementsName ");
    displayElementsName(document.childNodes[1].childNodes);
}

//console.log("\t".repeat(n)) pour afficher plusieurs tabulations a la suite

//Recuperation des elements par TAG
let everySections = document.getElementsByTagName('section');
console.log(everySections);

//Par classe
let everySomeClass = document.getElementsByClassName('someClass');
console.log(everySomeClass);

//Par ID
let theIDSection = document.getElementById("sectionID");

//via selecteur CSS (dans les navigateurs modernes)
let allElementsMatchingCSSSelector = document.querySelectorAll(".someClass");  //. pour class en CSS
let theFirstElementMatchingCSSSelector = document.querySelector("#sectionID"); //# pour ID en CSS


//Creation dynamique de contenu; attention peut faire ramer car relayout de la page
let innerHTMLSection = document.querySelector("#innerHTMLsection");
innerHTMLSection.innerHTML = "<h1>Bonjour le monde</h1>";

//Creation de manuelle de nodes
let appendChildSection = document.querySelector('#appendChildSection');
let h1Node = document.createElement('h1'); //On travaille sur un DOM virtuel, offline !!!!
let textNode = document.createTextNode("Bonjour les geeks");
h1Node.appendChild(textNode);
appendChildSection.appendChild(h1Node);