import { FETCH_CATEGORIES_SUCCESS } from '../actions/types';

const initialState = {
  loading: false,
  categories: []
}

export default function categories(state = initialState, action = {}) {
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: true,
        categories: action.categories
      }

    default:
      return state;
  }
}
