import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { Provider } from 'react-redux';
import { userLogin } from './redux/actions/account';
import { setLocale } from './redux/actions/locale';
import configureStore from './redux/configureStore';
import { BrowserRouter, Route } from 'react-router-dom';
import decode from 'jwt-decode';
import App from './containers/App';
import './styles/modern.css';

const store = configureStore();
if(localStorage.token) {
  const token = decode(localStorage.token);
  const user = {
    token: localStorage.token,
    confirm: token.confirm
  }
  store.dispatch(userLogin(user));
}

addLocaleData(en);
addLocaleData(ru);

if(localStorage.lang)
  store.dispatch(setLocale(localStorage.lang));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store } >
      <Route component={ App } />
    </Provider>
  </BrowserRouter>,
  document.getElementById('bookstore-app')
);
