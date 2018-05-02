import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import rootReducer from '../reducer';
import rootEpic from '../epic';

const epicMiddleware = createEpicMiddleware(rootEpic);

// TODO only use logger in development
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
);

export default store;
