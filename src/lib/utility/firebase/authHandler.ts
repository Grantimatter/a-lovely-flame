import {
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
//import { FirebaseApp } from 'firebase';

export function signIn(auth: Auth) {
    var provider = new GoogleAuthProvider();
    await signInWith
}