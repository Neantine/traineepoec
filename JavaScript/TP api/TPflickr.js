/**
 * Created by Administrateur on 05/08/2016.
 */

function Item (title, url) {
    this.title = title;
    this.url = url;
}

function buildUrl(photo) {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}

function buildGalleryHTML(items, containerCSSSelector) {
    console.log("buildGalleryHTML");

    let galleryHTML =
        `<div class="gallery">
        ${ items.reduce((html, item) => {
            return html + buildGalleryItemHTML(item)
        }, '')}
    </div>`;
    document.querySelector(containerCSSSelector).innerHTML = galleryHTML;
}

function buildGalleryItemHTML(item) {
    console.log("buildGalleryHTMLItem");

    return `<a href="" class="gallery__item">
                <img class="gallery__item__image" src="${item.url}" >
                <p class="gallery__item__title" >${(item.title, 15)}</p>
            </a>`
}

// class FlickrInterestingPromise extends Promise {
//     constructor() {
//         this.xhr = new XMLHttpRequest();
//         this.xhr.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=aaa4b9995ecedc077fca26cadc7ef8e5&format=json&nojsoncallback=1&api_sig=93210432147642edde0aff5539de7175');
//     };
// };


class FlickrService {

    constructor() {
        console.log("FlickrService created");
        //this.flickrInterestingPromise = new FlickrInterestingPromise();

    }

    getInteresting() {

        console.log("FlickrService getInteresting fct called");

        //let p = new FlickrInterestingPromise();

        let p = new Promise(function(resolve, rejected) {   //lexical this: si on ecrit let p = new Promise(resolve, rejected=> {} on peut utiliser this pour referencer le FlickrService et ses attributs, sinon on ne peut pas puisqu'on est dans le constructeur de Promise!!!
            let xhr=new XMLHttpRequest();
            xhr.open('GET','https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=aaa4b9995ecedc077fca26cadc7ef8e5&format=json&nojsoncallback=1&api_sig=93210432147642edde0aff5539de7175', true);
            xhr.onreadystatechange = function() {
                try {  //Le try-catch est mis autour du code asynchrone, sinon on ne peut pas catcher les erreurs car elles sont sur une autre thread
                    if (xhr.readyState == 4) {
                        console.log("xhr state ", xhr.state);
                        //Faudrait peut etre mettre ca ds une fct asynchrone pour pas faire ramer l'UI ?
                        let jsonResponse = JSON.parse(xhr.responseText);
                        //Faudrait peut etre mettre ca ds une fct asynchrone pour pas faire ramer l'UI ?
                        let items = jsonResponse.photos.photo.map(
                            photo => new Item(photo.title, buildUrl(photo))
                        );
                        resolve(items);
                    }
                } catch(e)
                {
                    reject(e);
                }
            }
            xhr.send();
         });
         return p;

    }
};



//resolve est une fonction qui doit prendre en parametre items et renvoyer buildGalleryHTML(items, '.gallery-block')
//rejected ne fait rien



let flickrService = new FlickrService();
flickrService.getInteresting().then(items => buildGalleryHTML(items, '.gallery-block')).catch();