import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDIu53Hcps06QTVCzI8iTqYi0Qg5yOu4Dk',
  authDomain: 'firegram-d7ec1.firebaseapp.com',
  projectId: 'firegram-d7ec1',
  storageBucket: 'firegram-d7ec1.appspot.com',
  messagingSenderId: '240152719622',
  appId: '1:240152719622:web:dd9a779b379d1fc425ee87',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
