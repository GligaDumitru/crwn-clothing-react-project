import {
  TOGGLE_FIELD,
  ADD_ITEM,
  DECREASE_CART_ITEM_QUANTITY,
  CLEAR_ITEM_FROM_CART,
} from './../types';
import {
  addCartItem,
  clearItemFromCart,
  decreaseCartItemQuantity,
} from './cart.utils';
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
        cartItems: addCartItem(state.cartItems, payload),
      };
    case DECREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseCartItemQuantity(state.cartItems, payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
