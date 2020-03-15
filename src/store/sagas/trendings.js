import {call, put, takeLatest} from 'redux-saga/effects';
import {getTrendings} from '../../services/MovieDatabase/functions';

import {Types} from '../ducks/trendings';

function* downloadTrendings() {
  const {data} = yield call(getTrendings);

  const trendings = data.results;

  yield put({type: Types.SUCCESS_DOWNLOAD_TRENDINGS, payload: {trendings}});
}

export default function* trendingsSaga() {
  yield takeLatest(Types.DOWNLOAD_TRENDINGS, downloadTrendings);
}
