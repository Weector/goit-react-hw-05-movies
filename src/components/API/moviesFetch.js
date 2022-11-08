import axios from 'axios';

const API_KEY = 'api_key=936bad92f4a27fe8a667506dd7861007';
export const BASE_URL = 'https://api.themoviedb.org/3/';

export async function moviesTrends() {
  const response = await axios
    .get(`${BASE_URL}trending/movie/day?${API_KEY}`)
    .then(resp => resp);

  return response.data;
}

export async function moviesInfo(id) {
  const response = await axios
    .get(`${BASE_URL}movie/${id}?${API_KEY}&language=en-US`)
    .then(resp => resp);

  return response.data;
}

export async function moviesCast(id) {
  const response = await axios
    .get(`${BASE_URL}movie/${id}/credits?${API_KEY}&language=en-US`)
    .then(resp => resp);

  return response.data;
}

export async function moviesReviews(id) {
  const response = await axios
    .get(`${BASE_URL}movie/${id}/reviews?${API_KEY}&language=en-US&page=1`)
    .then(resp => resp);

  return response.data;
}

export async function moviesSearch(query) {
  const response = await axios
    .get(
      `${BASE_URL}search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(resp => resp);

  return response.data;
}
