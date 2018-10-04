import { GET_POPULAR_BOOKS } from '../actions/types';

const initialState = {
  loading: false,
  books: []
}

export default function books(state = initialState, action = {}) {
  switch(action.type) {
    case GET_POPULAR_BOOKS:
      return {
        ...state,
        loading: true,
        books: action.books
      }

    default:
      return state;
  }
}
