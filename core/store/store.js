import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'core/reducers/root';
import reduxThunk from 'redux-thunk'

export default createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);