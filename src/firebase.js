// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5M1PHkuVUTU5IdLJoAQ7wtvY6YbXfKzQ",
    authDomain: "instagram-clone-react-4f3c7.firebaseapp.com",
    projectId: "instagram-clone-react-4f3c7",
    storageBucket: "instagram-clone-react-4f3c7.appspot.com",
    messagingSenderId: "835637784859",
    appId: "1:835637784859:web:d2d4a68b6c39eb777ea3be",
    measurementId: "G-B88XSPXRP7"
})
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };