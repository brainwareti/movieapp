import axios from 'axios';

const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 2000,
});

export default movieService;
