import { GET_POPULAR_BOOKS } from '../actions/types';
import api from '../api';

export const getPupularBooks = books => ({
  type: GET_POPULAR_BOOKS,
  books
});

export const getPopularBooks = () => dispatch =>
  api.books.popular().then(books => {
    dispatch(getPupularBooks(books))
  });
