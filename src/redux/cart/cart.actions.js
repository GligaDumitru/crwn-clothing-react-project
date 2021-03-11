import { TOGGLE_FIELD, ADD_ITEM } from '../types';

export const setToggleField = (payload) => ({
  type: TOGGLE_FIELD,
  payload,
});

export const addCartItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});
