import {
  FETCH_CATEGORIES_SATART,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../actions/types';
import api from '../../api';

export const getAllCategories = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});

export const getCategories = () => dispatch => {
  dispatch({ type: FETCH_CATEGORIES_SATART });
  api.categories().then(categories => {
    dispatch(getAllCategories(categories))
  }).catch(err => dispatch({
    type: FETCH_CATEGORIES_FAILURE,
    payload: err.response.data.errors
  }));
}
