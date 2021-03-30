import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCK098O1ZXCZwOGcBqfq4TqCzbLEWKBesQ',
  authDomain: 'crwn-db-ec7eb.firebaseapp.com',
  projectId: 'crwn-db-ec7eb',
  storageBucket: 'crwn-db-ec7eb.appspot.com',
  messagingSenderId: '847991764665',
  appId: '1:847991764665:web:9eccd2f0d6bd2cab438d68',
  measurementId: 'G-XZ69SC3KP8',
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((objectToAdd) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, objectToAdd);
  });

  return await batch.commit();
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  const userExists = snapShot.exists;

  if (!userExists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transforCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    const res = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
    return res;
  });

  return transforCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters(
  { prompt: 'select_account' }
);

export default firebase;
