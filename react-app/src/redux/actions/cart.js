import {
  ADD_BOOK_TO_CART,
  UPDATE_QUANTITY,
  DELETE_CART_ITEM
} from '../actions/types';

export const addBookToCart = ({ id, title, image, price, count = 1 }) => ({
  type: ADD_BOOK_TO_CART,
  items: { id, title, image, price, count }
});

export const updateQuantityItem = ({ id, quantity }) => ({
  type: UPDATE_QUANTITY,
  items: { id, quantity }
});

export const deleteCartItem = ({ id }) => ({
  type: DELETE_CART_ITEM,
  items: { id }
});
