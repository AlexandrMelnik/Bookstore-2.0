import { ADD_BOOK_TO_CART, UPDATE_QUANTITY } from '../actions/types';

const initialState = {
  items: []
}

export default function cart(state = initialState, action = {}) {
  switch(action.type) {
    case ADD_BOOK_TO_CART:
      const existIndex = findBookIndex(state.items, action.items.id);
      if(existIndex !== -1) {
        state.items[existIndex].count += 1;
        return {
          items: [...state.items]
        };
      }
      return {
        items: [...state.items, action.items]
      };

    case UPDATE_QUANTITY:
      const existItemIndex = findBookIndex(state.items, action.items.id);
      if(state.items[existItemIndex].count === 1 && action.items.quantity === -1) {
        return {
          items: [...state.items]
        };
      } else {
        state.items[existItemIndex].count += action.items.quantity;
        return {
          items: [...state.items]
        };
      }


    default:
      return state;
  }

  function findBookIndex(books, id) {
    return books.findIndex((book) => book.id === id);
  }
}
