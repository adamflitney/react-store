import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBjjEF1nvmuQ3QD2QJ-Npb4hNCiXhg-LcE",
    authDomain: "crwn-db-46289.firebaseapp.com",
    databaseURL: "https://crwn-db-46289.firebaseio.com",
    projectId: "crwn-db-46289",
    storageBucket: "crwn-db-46289.appspot.com",
    messagingSenderId: "595503850769",
    appId: "1:595503850769:web:53cb10ce5a2e3df867d8b0",
    measurementId: "G-V2V34KNWDN"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      
      const snapshot = await userRef.get();
      
      if(!snapshot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date(); 

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error.message);
              
          }
      }

      return userRef;
  }

  // Initialize Firebase
  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;