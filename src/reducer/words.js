import _ from 'lodash';
import { createReducer } from 'reduxsauce';
import Types from '../action/type';

const INITIAL_STATE = [];

const WORDS_PUT = (state = INITIAL_STATE, action) => {
  return _.sortBy([...state, action.word], word => word.date).reverse();
};

const HANDLERS = {
  [Types.WORDS_PUT]: WORDS_PUT
};

export default createReducer(INITIAL_STATE, HANDLERS);
