import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';

const configureStore = () => {
  const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
