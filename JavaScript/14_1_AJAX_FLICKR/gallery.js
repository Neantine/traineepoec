function Item (title, url) {
    this.title = title;
    this.url = url;
}

function buildGalleryHTML(items, containerCSSSelector) {
    let galleryHTML =
        `<div class="gallery">
        ${ items.reduce((html, item) => {
            return html + buildGalleryItemHTML(item)
        }, '')}
    </div>`;
    document.querySelector(containerCSSSelector).innerHTML = galleryHTML;
}

function buildGalleryItemHTML(item) {
    return `<a href="" class="gallery__item">
                <img class="gallery__item__image" src="${item.url}" >
                <p class="gallery__item__title" >${ellipsis(item.title, 15)}</p>
            </a>`
}