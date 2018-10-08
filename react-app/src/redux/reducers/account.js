import {
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_LOGOUT
} from '../actions/types';

export default function account(state = {}, action = {}) {
  switch(action.type) {
    case ACCOUNT_LOGIN_SUCCESS:
      return action.user;

    case ACCOUNT_LOGOUT:
      return {};

    default:
      return state;
  }
}
