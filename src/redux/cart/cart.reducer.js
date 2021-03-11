import { TOGGLE_FIELD } from './../types';
const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_FIELD:
      return {
        ...state,
        [payload]: !state[payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
