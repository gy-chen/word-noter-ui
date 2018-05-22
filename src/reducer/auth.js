import { createReducer, resettableReducer } from 'reduxsauce';
import Types from '../action/type';

const INITIAL_STATE = {
  currentUser: null,
  token: null
};

const AUTH_SET_TOKEN = (state = INITIAL_STATE, action) => {
  return { ...state, token: action.token };
};

const AUTH_SET_CURRENT_USER = (state = INITIAL_STATE, action) => {
  return { ...state, currentUser: action.currentUser };
};

const HANDLERS = {
  [Types.AUTH_SET_TOKEN]: AUTH_SET_TOKEN,
  [Types.AUTH_SET_CURRENT_USER]: AUTH_SET_CURRENT_USER
};

const resettable = resettableReducer(Types.AUTH_LOGOUT);

export default resettable(createReducer(INITIAL_STATE, HANDLERS));
