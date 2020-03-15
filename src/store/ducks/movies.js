export const Types = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  SAVE_MOVIES_BY_GENRE: 'SAVE_MOVIES_BY_GENRE',
  SELECT_MOVIE_DETAILS: 'SELECT_MOVIE_DETAILS',
};

const INITIAL_STATE = {
  moviesByGenre: [],
  moviesByGenrePage: 1,
  selectedMovieId: null,
  selectedMovie: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case Types.CHANGE_GENRE:
      return {
        ...state,
      };
    case Types.SAVE_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre: payload.movies,
      };
    case Types.SELECT_MOVIE_DETAILS:
      const {id} = payload;
      return {
        ...state,
        selectedMovieId: id,
        selectedMovie: state.moviesByGenre.filter(movie => movie.id === id)[0],
      };
    default:
      return state;
  }
}

export const seeDetails = id => ({
  type: Types.SELECT_MOVIE_DETAILS,
  payload: {
    id,
  },
});
