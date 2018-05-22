import { combineReducers } from 'redux';
import auth from './auth';
import words from './words';

const rootReducer = combineReducers({
  auth,
  words
});

export default rootReducer;
