import {
  ACCOUNT_LOGIN_FAILURE,
  ACCOUNT_CREATE_FAILURE
} from '../actions/types';

const initialState = {
  serverErrors: {}
}

export default function fetchFailure(state = initialState, action = {}) {
  switch(action.type) {
    case ACCOUNT_LOGIN_FAILURE:
      return {
        ...state,
        serverErrors: action.payload
      };

    case ACCOUNT_CREATE_FAILURE:
      return {
        ...state,
        serverErrors: action.payload
      };


    default:
      return state;
  }
}
