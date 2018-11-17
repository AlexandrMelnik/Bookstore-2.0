import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { userLogin } from './redux/actions/account';
import { updateBookToCart } from './redux/actions/cart';
import { setLocale } from './redux/actions/locale';
import configureStore from './redux/configureStore';
import { Route, BrowserRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import App from './containers/App';
import './styles/modern.css';

/* Create store settings */
const store = configureStore();

/* Сheck if there is a user token */
if(localStorage.token) {
  /* If there is, then we decode and log in */
  const token = decode(localStorage.token);
  const user = {
    token: localStorage.token,
    confirm: token.confirm
  }
  store.dispatch(userLogin(user));
}

/* If there are goods in the local storage then added to the cart */
if(localStorage.cart) {
  store.dispatch(updateBookToCart(JSON.parse(localStorage.cart)));
}

/* Language setting */
if(localStorage.lang) {
  /* If in local storage have a language and set it up */
  store.dispatch(setLocale(localStorage.lang));
} else {
  /* Otherwise, set the default language {en} */
  store.dispatch(setLocale('en'));
}

ReactDOM.render(
  <Provider store={ store } >
    <BrowserRouter>
      <Route component={ App } />
    </BrowserRouter>
  </Provider>,
  document.getElementById('bookstore-app')
);
