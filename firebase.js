
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm7KuZDOYcLphnIL_tfnTlZ6cRgIBg-z4",
  authDomain: "fir-auth-ba243.firebaseapp.com",
  projectId: "fir-auth-ba243",
  storageBucket: "fir-auth-ba243.appspot.com",
  messagingSenderId: "740022314285",
  appId: "1:740022314285:web:a0479f845ecd60a2065fa4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };