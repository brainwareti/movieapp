import axios from 'axios';

import {IMAGE_URL, MOVIE_DB_URL} from '../../utils/constants';

const movieService = axios.create({
  baseURL: MOVIE_DB_URL,
  timeout: 2000,
});

export const imageService = axios.create({
  baseURL: IMAGE_URL,
  timeout: 2000,
});

export default movieService;
