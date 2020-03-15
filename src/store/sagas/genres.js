import {call, put, takeLatest, select} from 'redux-saga/effects';
import {
  getGenres,
  getMoviesByGenre,
} from '../../services/MovieDatabase/functions';
import {Types, selectGenre} from '../ducks/genres';
import {Types as MoviesTypes} from '../ducks/movies';

function* downloadGenres() {
  const {data} = yield call(getGenres);

  const genres = data.genres;

  yield put({type: Types.SAVE_GENRES, payload: {genres}});
  yield put({type: Types.SELECT_GENRE, payload: {id: genres[0].id}});
}

function* changeGenre() {
  const selectedGenreId = yield select(state => state.genres.selectedGenreId);
  const {
    data: {results: movies},
  } = yield call(getMoviesByGenre, [selectedGenreId]);

  yield put({type: MoviesTypes.SAVE_MOVIES_BY_GENRE, payload: {movies}});
}

export default function* genresSaga() {
  yield takeLatest(Types.GET_GENRES, downloadGenres);
  yield takeLatest(Types.SELECT_GENRE, changeGenre);
}
