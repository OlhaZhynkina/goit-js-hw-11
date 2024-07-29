import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api';
import { imagesMarkup } from './js/render-functions';
import iconError from './img/error.svg';

const formElement = document.querySelector('.js-form');
const ulElement = document.querySelector('.js-gallery-list');
const loader = document.querySelector('.loader');

formElement.addEventListener('submit', onSearchPhotos);

function onSearchPhotos(event) {
  event.preventDefault();

  const formData = new FormData(formElement);
  const searchQuery = formData.get('search').trim();

  if (searchQuery === '') {
    return iziToast.error({
      iconUrl: iconError,
      title: 'Error',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
      message: 'The field cannot be empty!',
    });
  }

  loader.classList.remove('hidden');

  getPhotos(searchQuery)
    .then(response => {
      if (response.hits.length === 0) {
        return iziToast.error({
          iconUrl: iconError,
          title: 'Error',
          titleColor: '#fff',
          messageColor: '#fff',
          backgroundColor: '#ef4040',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      ulElement.innerHTML = imagesMarkup(response.hits);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
      event.target.reset();
    });
}
