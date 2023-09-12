// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

// Change code below this line

const galleryListRef = document.querySelector('.gallery');

galleryListRef.addEventListener('click', onClickImg);

function onClickImg(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    animationSpeed: 400,
    captionDelay: 250,
    alertError: 'Image not found',
    heightRatio: 0.8,
  });

  galleryListRef.removeEventListener('click', onClickImg);
}

function createImgEl(arr) {
  const exampleOfCard = arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
    })
    .join('');

  galleryListRef.innerHTML = exampleOfCard;
}

createImgEl(galleryItems);
