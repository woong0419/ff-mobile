import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  console.log('auth:', auth, 'provider:', provider);
  return signInWithPopup(auth, provider);
};

const signOutWithGoogle = () => {
  signOut(auth);
};

export { signInWithGoogle, signOutWithGoogle };
