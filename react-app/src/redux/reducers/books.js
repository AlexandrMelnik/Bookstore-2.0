import { GET_ALL_BOOKS, GET_BOOK } from '../actions/types';

const initialState = {
  loading: false,
  books: [],
  book: {}
}

export default function books(state = initialState, action = {}) {
  switch(action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        loading: true,
        books: action.books
      }

      case GET_BOOK:
       return {
          ...state,
          loading: true,
          book: action.book
        }

    default:
      return state;
  }
}
