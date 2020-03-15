import {combineReducers} from 'redux';

import trendings from './trendings';
import genres from './genres';
import movies from './movies';

export default combineReducers({
  trendings,
  genres,
  movies,
});
