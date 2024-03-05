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
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
}

console.log(galleryItems);

const lightBox = new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    captionDelay: 250,
    captionType: 'alt',
    captionPosition: 'bottom',
});
