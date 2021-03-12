import {
  TOGGLE_FIELD,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  DECREASE_CART_ITEM_QUANTITY,
} from '../types';

export const setToggleField = (payload) => ({
  type: TOGGLE_FIELD,
  payload,
});

export const addCartItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const decreaseCartItemQuantity = (payload) => ({
  type: DECREASE_CART_ITEM_QUANTITY,
  payload,
});

export const clearItemFromCart = (payload) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload,
});
