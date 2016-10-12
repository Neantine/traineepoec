/**
 * Created by Administrateur on 04/08/2016.
 */

// let xhr = new XMLHttpRequest();
//
// //On definit la ressource a atteindre et la maniere de l'atteindre
// xhr.open('GET', 'http://uifaces.com/api/v1/random');  //API exposee par le serveur, ici pour l'exemple, un site de photos de personnes
// //Voir http://www.programmableweb.com/apis/directory
//
// //On accroche un listener pour reagir aux changements d'etats de l'objet
// xhr.onreadystatechange = function()
// {
//     //console.log(xhr.readyState);
//     if (xhr.readyState == 4)
//     {
//         console.log(xhr.status);
//         let divRandom = document.querySelector('.random');
//
//         let o = JSON.parse(xhr.responseText);
//         //console.log(o);
//
//         //On peut injecter le contenu du resultat dans notre page HTML
//         //divRandom.innerHTML = xhr.responseText ;
//         divRandom.innerHTML = `<h1>${o.username}</h1>
//                                 <img src="${o.image_urls.epic}">`;
//     }
// };
//
// //On envoie la requete HTTP
// xhr.send();

/************TP***/

let xhrFlickr = new XMLHttpRequest();
xhrFlickr.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=10c6cbb1124a050c3bd98a03ab1aaf33&format=json&nojsoncallback=1&api_sig=f080dec62461316da071b586c17014ce');
xhrFlickr.onreadystatechange = function() {

    if (xhrFlickr.readyState == 4) {
        console.log(xhrFlickr.status);

        let jResult = JSON.parse(xhrFlickr.responseText);
        console.log(jResult);

        let gallerySection = document.querySelector('.gallery-section');
        let galleryItem = document.querySelector('.gallery-item');

        for (let i=0; i<jResult.photos.photo.length; i++)
        {
            let id=jResult.photos.photo[i].id;
            let farm=jResult.photos.photo[i].farm;
            let secret=jResult.photos.photo[i].secret;
            let server=jResult.photos.photo[i].server;
            let title=jResult.photos.photo[i].title;

            //****The NodeElement way
            // let galleryItem = document.createElement('img');
            // galleryItem.setAttribute("title", title);
            //let urlImage = 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'.jpg';
            //galleryItem.setAttribute("src", urlImage);
            //gallerySection.appendChild(galleryItem);
            //********

            galleryItem.innerHTML += `<p>${title}</p><img src='https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg'>`;


        }

    }
};

xhrFlickr.send();