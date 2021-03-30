import { takeLatest, put, all, call } from 'redux-saga/effects';
import { GOOGLE_SIGN_IN_START } from './../types';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
