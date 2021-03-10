import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCK098O1ZXCZwOGcBqfq4TqCzbLEWKBesQ",
    authDomain: "crwn-db-ec7eb.firebaseapp.com",
    projectId: "crwn-db-ec7eb",
    storageBucket: "crwn-db-ec7eb.appspot.com",
    messagingSenderId: "847991764665",
    appId: "1:847991764665:web:9eccd2f0d6bd2cab438d68",
    measurementId: "G-XZ69SC3KP8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;