import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
}


console.log(galleryItems);

galleryList.addEventListener('click', onMouseClick);

function onMouseClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    
    }

    const instance = basicLightbox.create(
        `<img src = '${event.target.dataset.source}'>`,
        {
            onShow: (instance) => {
                document.addEventListener('keydown', onCloseEscape);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', onCloseEscape);
            },
        }

    );
    instance.show();
    function onCloseEscape(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        };
    };
};

