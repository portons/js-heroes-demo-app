import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/root';

const middlewares = [
	reduxThunk,
	createLogger({ collapsed: true })
];

export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);