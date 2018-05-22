import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import rootReducer from '../reducer';
import rootEpic from '../epic';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middlewares = [epicMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store;
