const BASE = '/api';

async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('API error: ' + res.status);
  return res.json();
}

export const getPosts       = (filters = {}) => {
  const q = new URLSearchParams(filters).toString();
  return fetchJSON(BASE + '/posts' + (q ? '?' + q : ''));
};
export const getPost        = (slug) => fetchJSON(BASE + '/posts/' + slug);
export const addComment     = (slug, data) => fetchJSON(BASE + '/posts/' + slug + '/comments', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
});

export const getRestaurants = (filters = {}) => {
  const q = new URLSearchParams(filters).toString();
  return fetchJSON(BASE + '/restaurants' + (q ? '?' + q : ''));
};
export const getRestaurant  = (slug) => fetchJSON(BASE + '/restaurants/' + slug);
export const addReview      = (slug, data) => fetchJSON(BASE + '/restaurants/' + slug + '/reviews', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
});

export const sendContact    = (data) => fetchJSON(BASE + '/contact', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
});