import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC6PiC-vxbSnxSvsM1KaP_V1N11xITVkg4",
    authDomain: "auth-fef0c.firebaseapp.com",
    projectId: "auth-fef0c",
    storageBucket: "auth-fef0c.appspot.com",
    messagingSenderId: "359978961603",
    appId: "1:359978961603:web:223bf18dc998d77a06b076"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   const db = firebase.firestore();
   const auth = firebase.auth();
   export {auth};
   export default db;