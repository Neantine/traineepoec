function buildUrl(photo) {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=10c6cbb1124a050c3bd98a03ab1aaf33&format=json&nojsoncallback=1&api_sig=f080dec62461316da071b586c17014ce');

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) { // xhr.DONE
        let jsonResponse = JSON.parse(xhr.responseText);
        // console.log(jsonResponse.photos.photo);
        let items = jsonResponse.photos.photo.map(
            photo => new Item(photo.title, buildUrl(photo))
        );

        // let items = [];
        // for(let i = 0; i < jsonResponse.photos.photo.length; i++) {
        //     let photo = jsonResponse.photos.photo[i];
        //     items.push(new Item(photo.title, buildUrl(photo)));
        // }

        console.log(items);
        buildGalleryHTML(items, '.gallery-block');
    }
};


xhr.send();
