import { SET_LOCALE } from '../actions/types';

const initialState = {
  language: ''
}

export default function locale(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOCALE:
      return { ...state, language: action.payload.language }
    default :
      return state;
  }
}
