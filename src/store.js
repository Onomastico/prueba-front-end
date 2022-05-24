import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const cartItems = [];
const initState = { appState: 'shopping', cart: { items: cartItems, isOpen: false } };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;