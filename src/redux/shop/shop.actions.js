import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from './../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (payload) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload,
});
export const fetchCollectionsFailure = (payload) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload,
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsObject = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsObject));
    })
    .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
};
