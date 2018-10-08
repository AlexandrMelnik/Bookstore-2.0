import {
  ACCOUNT_CREATE_START,
  ACCOUNT_CREATE_FAILURE,
  ACCOUNT_CREATE_SUCCESS,
  ACCOUNT_LOGIN_START,
  ACCOUNT_LOGIN_FAILURE,
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_LOGOUT
} from '../actions/types';
import api from '../../api';
import hystory from '../../hystory';

export const userLogin = user => ({
  type: ACCOUNT_LOGIN_SUCCESS,
  user
});

export const signin = data => dispatch => {
  dispatch({ type: ACCOUNT_LOGIN_START });
  return api.account.signin(data).then(user => {
    localStorage.token = user.token;
    dispatch(userLogin(user));
    hystory.push('/');
  }).catch(err => dispatch({
    type: ACCOUNT_LOGIN_FAILURE,
    payload: err.response.data.errors
  }));
}

export const signup = data => dispatch => {
  dispatch({ type: ACCOUNT_CREATE_START });
  return api.account.signup(data).then(user => {
    localStorage.token = user.token;
    dispatch({ type: ACCOUNT_CREATE_SUCCESS });
    dispatch(userLogin(user));
    hystory.push('/profile');
  }).catch(err => dispatch({
    type: ACCOUNT_CREATE_FAILURE,
    payload: err.response.data.errors
  }));
}

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
