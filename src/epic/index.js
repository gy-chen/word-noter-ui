import { combineEpics } from 'redux-observable';
import wordEpic from './word';

const rootEpic = combineEpics(
    wordEpic
);

export default rootEpic;
