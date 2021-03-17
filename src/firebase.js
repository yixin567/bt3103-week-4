import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDghLK4JkCLjd_r_zljAso6P5DyAZLEI_Q",
    authDomain: "bt3103-153af.firebaseapp.com",
    projectId: "bt3103-153af",
    storageBucket: "bt3103-153af.appspot.com",
    messagingSenderId: "469399411103",
    appId: "1:469399411103:web:d34b46349dd300606445aa",
    measurementId: "G-N3XNPNS4EQ"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;