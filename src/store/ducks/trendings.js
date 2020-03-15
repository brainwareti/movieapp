import '~/config/ReactotronConfig';

export const Types = {
  DOWNLOAD_TRENDINGS: 'DOWNLOAD_TRENDINGS',
  SUCCESS_DOWNLOAD_TRENDINGS: 'SUCCESS_DOWNLOAD_TRENDINGS',
  FAILURE_DOWNLOAD_TRENDINGS: 'FAILURE_DOWNLOAD_TRENDINGS',
};

const INITIAL_STATE = {
  trendings: [],
  downloading: false,
  error: false,
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
