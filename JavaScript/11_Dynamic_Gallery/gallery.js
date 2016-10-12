/**
 * Created by Administrateur on 02/08/2016.


1/Fct constructeur pour creer les items
 2/Appeler la fonction pour creer les tableau d'items (a partir des images du site fnac.com
 3/Ecrire une fonction pour inserer la gallerie d'items dans l'element DOM de notre choix, precisé par le selecteur
 buildGallery(items, containerCSSSelector)

 */

/*
<div class="gallery__content">
    <div class="gallery__item">
    <div class="gallery__item__container">
    <img src="img/3b9d1edc-de3c-450b-9443-53bbb1e14370.JPG" alt="">
    </div>
    <p>DVD</p>
    </div>
  */

function Item(title, img)
{
    this.galleryItemTitle = title;
    this.galleryItemImg = img;
};

let itemArray = [new Item("Titre 1", "img/e96l7ib3.bmp"), new Item("Titre 2", "img/0vi8u8pj.bmp"),
    new Item("Titre 3", "img/e96l7ib3.bmp"), new Item("Titre 4", "img/50ytutvr.bmp"),
    new Item("Titre 5", "img/0vi8u8pj.bmp"),new Item("Titre 6", "img/50ytutvr.bmp")];



function buildGallery(itemArray, CSSSelector)
{
    //let gallerySection = document.getElementsByClassName("gallery-section");
    let gallerySection = document.querySelector(CSSSelector);
    let galleryContentNode = document.createElement("div");
    galleryContentNode.setAttribute("class", "gallery__content");
    gallerySection.appendChild(galleryContentNode);

    let galleryItemNode = document.createElement('div');
    galleryItemNode.setAttribute("class", "gallery__item");
    galleryContentNode.appendChild(galleryItemNode);

    let galleryItemContainerNode = document.createElement('div');
    galleryItemContainerNode.setAttribute("class", "gallery__item__container");
    galleryItemNode.appendChild(galleryItemContainerNode);

    for (let i = 0; i < itemArray.length; i++) {
        let imgElem = document.createElement('img');
        imgElem.setAttribute("src", itemArray[i].galleryItemImg);
        galleryItemContainerNode.appendChild(imgElem);

        let pElem = document.createElement('p');
        let pElemTxt = document.createTextNode(itemArray[i].galleryItemTitle);
        pElem.appendChild(pElemTxt);
        galleryItemContainerNode.appendChild(pElem);

    }
}

buildGallery(itemArray, ".gallery-section");


//**************************Correction du prof***************

//Bien isoler chaque problematique
//Penser en composants
//Bien lire les specs, partir des specs pour avoir le modele de donnees

// function buildGalleryItemHTML(item)
// {
//     return `
//         <a href="">
//         <img src="${item.url}" alt="${item.title}">
//          <p>${item.title}</p>
//         </a>
//     `;
// }
//
// function buildGallery(items, containerCSSSelector)
// {
//     let container = document.querySelector(containerCSSSelector);
//
//     //pour chaque item, creer le DOM correspondant
//     let itemsHTML = '';
//     for (let i=0; i<items.length; i++)
//     {
//         itemsHTML += buildGalleryItemHTML(items[i]);
//     }

// Petit plus, en utilisant reduce
//     container.innerHTML = `<div class="gallery">${items.reduce( (html, item) => html + buildGalleryItemHTML(item), '')}</div>`;
//
//     //quand tout est créé, injecter le DOM des items dans le
//     container.innerHTML = `<div class="gallery">${ itemsHTML }</div>`;
// }
//
// buildGallery(items, '.gallery-section');

/************************************************************/


//gallerySection.innerHTML = "<div class=gallery__content></div>";
//
// let appendChildSection = document.querySelector('#appendChildSection');
// let h1Node = document.createElement('h1'); //On travaille sur un DOM virtuel, offline !!!!
// let textNode = document.createTextNode("Bonjour les geeks");
// h1Node.appendChild(textNode);
// appendChildSection.appendChild(h1Node);

//gallerySection.appendChild(galleryContentNode.appendChild(galleryItemNode).appendChild(galleryItemContainerNode));

//gallerySection.appendChild(new GalleryItem("Titre de l'image", "<a href="C:\Users\Administrateur\WebstormProjects\JavaScript\11_Dynamic_Gallery\img\e96l7ib3.bmp"></a>"));

