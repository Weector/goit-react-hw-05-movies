import axios from 'axios';
import { API_KEY } from './KEY';

async function moviesTrends() {
  const response = await axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?${API_KEY}`)
    .then(resp => resp);

  return response.data;
}
export default moviesTrends;
