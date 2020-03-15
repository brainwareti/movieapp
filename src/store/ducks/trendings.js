import '~/config/ReactotronConfig';

export const Types = {
  DOWNLOAD_TRENDINGS: 'DOWNLOAD_TRENDINGS',
  SUCCESS_DOWNLOAD_TRENDINGS: 'SUCCESS_DOWNLOAD_TRENDINGS',
  FAILURE_DOWNLOAD_TRENDINGS: 'FAILURE_DOWNLOAD_TRENDINGS',
  SELECT_TRENDING_DETAILS: 'SELECT_TRENDING_DETAILS',
};

const INITIAL_STATE = {
  trendings: [],
  downloading: false,
  error: false,
  selectedMovieId: null,
  selectedMovie: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case Types.DOWNLOAD_TRENDINGS:
      return {
        ...state,
        downloading: true,
        error: false,
      };
    case Types.SUCCESS_DOWNLOAD_TRENDINGS:
      return {
        ...state,
        trendings: payload.trendings,
        downloading: false,
        error: false,
      };
    case Types.FAILURE_DOWNLOAD_TRENDINGS:
      return {
        ...state,
        downloading: false,
        error: true,
      };
    case Types.SELECT_TRENDING_DETAILS:
      const {id} = payload;
      return {
        ...state,
        selectedMovieId: id,
        selectedMovie: state.trendings.filter(movie => movie.id === id)[0],
      };
    default:
      return state;
  }
}

export const downloadTrendings = () => ({
  type: Types.DOWNLOAD_TRENDINGS,
});

export const saveTrendings = trendings => ({
  type: Types.SUCCESS_DOWNLOAD_TRENDINGS,
  payload: {
    trendings,
  },
});

export const errorDownloadTrendings = () => ({
  type: Types.FAILURE_DOWNLOAD_TRENDINGS,
});

export const seeDetailsTrending = id => ({
  type: Types.SELECT_TRENDING_DETAILS,
  payload: {
    id,
  },
});
