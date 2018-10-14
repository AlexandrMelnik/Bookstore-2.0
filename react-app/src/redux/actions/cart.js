import {
  ADD_BOOK_TO_CART,
  UPDATE_QUANTITY,
  DELETE_CART_ITEM,
  UPDATE_BOOK_TO_CART
} from '../actions/types';

export const addBookToCart = ({ id, title, image, price, count = 1 }) => ({
  type: ADD_BOOK_TO_CART,
  items: { id, title, image, price, count }
});

export const updateBookToCart = (cart) => ({
  type: UPDATE_BOOK_TO_CART,
  items: cart.map(item => {
    return {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      count: item.count
    }
  })
});

export const updateQuantityItem = ({ id, quantity }) => ({
  type: UPDATE_QUANTITY,
  items: { id, quantity }
});

export const deleteCartItem = ({ id }) => ({
  type: DELETE_CART_ITEM,
  items: { id }
});
