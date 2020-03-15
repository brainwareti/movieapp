import movieService from '../MovieDatabase';
import {KEY_MOVIE_SERVICE} from '../../utils/constants';
import '../../config/ReactotronConfig';

export const getTrendings = async () => {
  const response = await movieService.get(
    `trending/all/day?api_key=${KEY_MOVIE_SERVICE}`,
  );

  return response;
};

export const getGenres = async () => {
  const response = await movieService.get(
    `genre/movie/list?api_key=${KEY_MOVIE_SERVICE}`,
  );

  return response;
};

export const getMoviesByGenre = async genreList => {
  const genreListStr = genreList.join(',');
  const response = await movieService.get(
    `discover/movie?api_key=${KEY_MOVIE_SERVICE}`,
    {
      params: {
        sort_by: 'popularity.desc',
        with_genres: genreListStr,
      },
    },
  );

  return response;
};
