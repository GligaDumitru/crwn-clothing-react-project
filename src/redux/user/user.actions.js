import { CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SET_CURRENT_USER, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS } from './../types';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signUpStart = (payload) => ({
  type: SIGN_UP_START,
  payload,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
  type: SIGN_OUT_FAILURE,
});

export const signUpFailure = (payload) => ({
  type: SIGN_UP_FAILURE,
  payload,
});

export const signUpSuccess = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});
