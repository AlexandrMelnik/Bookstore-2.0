import { GET_ALL_CATEGORIES } from '../actions/types';
import api from '../api';

export const getAllCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
});

export const getCategories = () => dispatch =>
  api.categories().then(categories => {
    dispatch(getAllCategories(categories))
  });
