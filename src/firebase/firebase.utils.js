import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBDkWs9bxoKyCr4K2VSzT5iDHnvwB4znxw",
    authDomain: "crwn-crwn.firebaseapp.com",
    databaseURL: "https://crwn-crwn.firebaseio.com",
    projectId: "crwn-crwn",
    storageBucket: "",
    messagingSenderId: "613509043899",
    appId: "1:613509043899:web:d91b5501d698fef3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;