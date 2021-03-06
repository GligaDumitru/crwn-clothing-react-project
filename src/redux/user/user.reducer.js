import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
} from './../types';
const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case SIGN_OUT_FAILURE:
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
