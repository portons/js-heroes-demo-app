import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'core/reducers/root';
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger';

const middlewares = [
	reduxThunk,
	createLogger({ collapsed: true })
];

export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);