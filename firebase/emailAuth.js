import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase';

function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  //   console.log(user);
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorCode, errorMessage);
  //   // ..
  // });
}

function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logOut() {
  return signOut(auth);
}

export { createUser, logIn, logOut };
