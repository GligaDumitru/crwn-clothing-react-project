import { TOGGLE_FIELD, ADD_ITEM } from './../types';
import { addItemToCart } from './cart.utils';
const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_FIELD:
      return {
        ...state,
        [payload]: !state[payload],
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
