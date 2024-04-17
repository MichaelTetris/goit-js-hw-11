import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

const gallery = document.querySelector('.list_gallery');
const lightbox = new SimpleLightbox('.card .place-for-image a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'inline-block';
  const searchWord = event.currentTarget.elements.inputElement.value;
  searchImages(searchWord, loader, gallery)
    .then(data => {
      if (data.total == 0) {
        iziToast.show({
          title: 'Ops.',
          titleColor: 'white',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          color: 'red',
          position: 'topRight',
          timeout: '5000',
        })
        event.target.reset();
        return 0;
      } else {
        gallery.insertAdjacentHTML('beforeend', renderGallery(data));
        lightbox.refresh();
        event.target.reset();
      }
    })
    .catch(error => {
      iziToast.show({
        title: 'Ops.',
        titleColor: 'white',
        message: error,
        messageColor: 'white',
        color: 'red',
        position: 'topCenter',
        timeout: '5000',
      });
      
    })
    .finally(() => {
      
      loader.style.display = 'none';
    });
}

