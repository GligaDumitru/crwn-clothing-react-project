import { all, call, put, takeLatest } from 'redux-saga/effects';

import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/firebase.utils';
import { CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SIGN_OUT_START, SIGN_UP_START, SIGN_UP_SUCCESS } from './../types';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, displayName = null) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      displayName
        ? {
            displayName,
          }
        : {}
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithEmail({
  payload: { email, password, displayName = '' },
}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, displayName);
  } catch (error) {
    put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onEmailSignUpInStart() {
  yield takeLatest(SIGN_UP_SUCCESS, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signInAfterSignUp() {
  yield alert('sas');
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInWithEmail);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* signUpWithEmail({
  payload: { email, password, displayName },
}) {
  try {
    yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ email, password, displayName }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUpWithEmail);
}

export function* onCheckSignOut() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onCheckSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
