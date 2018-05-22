import { combineEpics } from 'redux-observable';
import wordEpic from './word';
import authEpic from './auth';

const rootEpic = combineEpics(authEpic, wordEpic);

export default rootEpic;
