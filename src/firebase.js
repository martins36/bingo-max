import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBzrRDJCDFNoGoAxlc-EOUp_caMexGvoSo",
  authDomain: "bingo-maxs.firebaseapp.com",
  projectId: "bingo-maxs",
  storageBucket: "bingo-maxs.appspot.com",
  messagingSenderId: "687062191761",
  appId: "1:687062191761:web:552f3a4a16ec0e38e47930"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }