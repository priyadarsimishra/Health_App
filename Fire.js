import * as firebase from "firebase";
export const firebaseConfig = {
  apiKey: "AIzaSyCP8qrtELKu_bEPum59PBmtOZzgAOy0wFw",
  authDomain: "healthapp-b63db.firebaseapp.com",
  databaseURL: "https://healthapp-b63db.firebaseio.com",
  projectId: "healthapp-b63db",
  storageBucket: "healthapp-b63db.appspot.com",
  messagingSenderId: "261449089823",
  appId: "1:261449089823:web:0ddaf924e6278c6c7a662a",
  measurementId: "G-XCHHXJ3NH0",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.firestore();
