import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT } from '../actions/types';
import api from '../api';

export const userLogin = user => ({
  type: ACCOUNT_LOGIN,
  user
});

export const signin = data => dispatch =>
  api.account.signin(data).then(user => {
    localStorage.token = user.token;
    dispatch(userLogin(user));
  });

export const signup = data => dispatch =>
  api.account.signup(data).then(user => {
    localStorage.token = user.token;
    dispatch(userLogin(user));
  });

export const userLogout = () => ({
  type: ACCOUNT_LOGOUT
});

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(userLogout())
};

export const confirm = token => dispatch =>
  api.account.confirm(token).then(user => {
    localStorage.token = user.token;
    dispatch(userLogin(user));
  });
