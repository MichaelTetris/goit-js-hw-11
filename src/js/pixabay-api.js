export function searchImages(stringSearch, myGallery) {
  const API_KEY = '43418044-448fc0127227a847b3808d395';
  const url = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: API_KEY,
    q: stringSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });

  return fetch(`${url}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('Failed to fetch images');
    });
}
