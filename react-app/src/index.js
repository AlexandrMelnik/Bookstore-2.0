import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { userLogin } from './redux/actions/account';
import configureStore from './redux/configureStore';
import { BrowserRouter, Route } from 'react-router-dom';
import decode from 'jwt-decode';
import App from './App';
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

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store } >
      <Route component={ App } />
    </Provider>
  </BrowserRouter>,
  document.getElementById('bookstore-app')
);
