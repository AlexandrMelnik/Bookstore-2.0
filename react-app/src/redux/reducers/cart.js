import {
  ADD_BOOK_TO_CART,
  UPDATE_QUANTITY,
  DELETE_CART_ITEM,
  UPDATE_BOOK_TO_CART
} from '../actions/types';

const initialState = {
  items: []
}

export default function cart(state = initialState, action = {}) {
  switch(action.type) {
    case ADD_BOOK_TO_CART:
      const existIndex = findBookIndex(state.items, action.items.id);
      if(existIndex !== -1) {
        state.items[existIndex].count += 1;
        localStorage.cart = JSON.stringify([...state.items]);
        return {
          items: [...state.items]
        };
      } else {
        localStorage.cart = JSON.stringify([...state.items, action.items]);
        return {
          items: [...state.items, action.items]
        };
      }

    case UPDATE_QUANTITY:
      const existItemIndex = findBookIndex(state.items, action.items.id);
      if(state.items[existItemIndex].count === 1 && action.items.quantity === -1) {
        localStorage.cart = JSON.stringify([...state.items]);
        return {
          items: [...state.items]
        };
      } else {
        state.items[existItemIndex].count += action.items.quantity;
        localStorage.cart = JSON.stringify([...state.items]);
        return {
          items: [...state.items]
        };
      }

    case DELETE_CART_ITEM:
      const existItemDelete = findBookIndex(state.items, action.items.id);
      localStorage.cart = JSON.stringify([...state.items.slice(0, existItemDelete), ...state.items.slice(existItemDelete+1)]);
      return {
        items: [...state.items.slice(0, existItemDelete), ...state.items.slice(existItemDelete+1)]
      }

    case UPDATE_BOOK_TO_CART:
        return {
          items: [...action.items]
        }

    default:
      return state;
  }

  function findBookIndex(books, id) {
    return books.findIndex((book) => book.id === id);
  }
}
