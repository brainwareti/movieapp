export const Types = {
  GET_GENRES: 'GET_GENRES',
  SAVE_GENRES: 'SAVE_GENRES',
  SELECT_GENRE: 'SELECT_GENRE',
};

const INITIAL_STATE = {
  genres: [],
  selectedGenreId: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case Types.GET_GENRES:
      return state;
    case Types.SAVE_GENRES:
      return {
        ...state,
        genres: payload.genres,
      };
    case Types.SELECT_GENRE:
      return {
        ...state,
        selectedGenreId: payload.id,
      };
    default:
      return state;
  }
}

export const getGenres = () => ({
  type: Types.GET_GENRES,
});

export const selectGenre = id => ({
  type: Types.SELECT_GENRE,
  payload: {
    id,
  },
});
