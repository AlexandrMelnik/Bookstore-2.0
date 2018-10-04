import { GET_ALL_CATEGORIES } from '../actions/types';

const initialState = {
  loading: false,
  categories: []
}

export default function categories(state = initialState, action = {}) {
  switch(action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        loading: true,
        categories: action.categories
      }

    default:
      return state;
  }
}
