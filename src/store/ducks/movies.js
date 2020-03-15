export const Types = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  SAVE_MOVIES_BY_GENRE: 'SAVE_MOVIES_BY_GENRE',
};

const INITIAL_STATE = {
  moviesByGenre: [],
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
    default:
      return state;
  }
}
