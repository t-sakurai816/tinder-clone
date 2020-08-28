import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC18m48lEL_dLMt-7kDXm5eKMBqIVFNjTU",
  authDomain: "tinder-clone-f26e4.firebaseapp.com",
  databaseURL: "https://tinder-clone-f26e4.firebaseio.com",
  projectId: "tinder-clone-f26e4",
  storageBucket: "tinder-clone-f26e4.appspot.com",
  messagingSenderId: "336248384402",
  appId: "1:336248384402:web:e662101e0ef79e7e192f4b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;