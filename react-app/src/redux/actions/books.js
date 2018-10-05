import { GET_ALL_BOOKS, GET_BOOK } from '../actions/types';
import api from '../api';

export const getBooks = books => ({
  type: GET_ALL_BOOKS,
  books
});

export const getAllBooks = () => dispatch =>
  api.books.all().then(books => {
    dispatch(getBooks(books))
});

export const getBook = book => ({
  type: GET_BOOK,
  book
});

export const getBookId = id => dispatch =>
  api.books.getBook(id).then(book => {
    dispatch(getBook(book))
});
