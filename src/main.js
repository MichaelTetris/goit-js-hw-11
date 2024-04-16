import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const lightbox = new SimpleLightbox('.gallery a');

const form = document.querySelector('.search_form');
console.log(form);

const gallery = document.querySelector('.list_gallery');

