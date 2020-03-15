import {fork, all} from 'redux-saga/effects';

import trendings from './trendings';
import genres from './genres';

function* rootSaga() {
  yield all([fork(trendings), fork(genres)]);
}

export default rootSaga;
