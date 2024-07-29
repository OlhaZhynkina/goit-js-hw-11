export function getPhotos(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '45170057-222a781b727842b81c5ded16b';
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
