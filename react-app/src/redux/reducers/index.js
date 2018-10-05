import { combineReducers } from 'redux'
import account from './account';
import books from './books';
import categories from './categories';
import locale from './locale';

export default combineReducers({
  account,
  categories,
  books,
  locale
});
