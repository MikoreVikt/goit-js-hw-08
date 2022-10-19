// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainerRef = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.innerHTML = galleryMarkup;

galleryContainerRef.addEventListener(`click`, event => event.preventDefault());

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img loading="lazy" class="gallery__image lazyload"  data-source="${original}" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  docClose: true,
});
