import { createStore } from 'redux';
import rootReducer from 'core/reducers/root';

export default createStore(
  rootReducer
);