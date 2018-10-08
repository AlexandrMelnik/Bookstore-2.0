import { FETCH_BOOKS_START, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, GET_BOOK } from '../actions/types';
import api from '../../api';

export const getBooks = books => ({
  type: FETCH_BOOKS_SUCCESS,
  books
});

export const getAllBooks = () => dispatch => {
  dispatch({ type: FETCH_BOOKS_START });
  api.books.all().then(books => {
    dispatch(getBooks(books))
  }).catch(err => dispatch({
    type: FETCH_BOOKS_FAILURE,
    payload: err.response.data.errors
  }));
}

export const getBook = book => ({
  type: GET_BOOK,
  book
});

export const getBookId = id => dispatch =>
  api.books.getBook(id).then(book => {
    dispatch(getBook(book))
});
