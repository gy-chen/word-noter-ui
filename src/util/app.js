import { findAllWords } from '../action/word';
import store from '../store';

export const initializeApp = (sotre=store) => {
  store.dispatch(findAllWords());
};
