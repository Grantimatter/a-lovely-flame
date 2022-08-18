import { firebaseConfig } from '../../../env';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, type User } from 'firebase/auth';
import { getPerformance} from 'firebase/performance';

import { Firestore, collection, getDocs } from 'firebase/firestore';
import type { Product } from "$lib/Product";
import type { BlogPost } from "$lib/BlogPost";

import {
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'firebase/auth';

import { userStore } from '$lib/stores/userStore';

console.debug("Initializing firebase app");

// Init firebase
const app = initializeApp(firebaseConfig);
// Get database for firebase project
const db = getFirestore(app);
// Get auth for firebase project
//const auth = getAuth(app);
// Get performance for firebase project
//const performance = getPerformance(app);

export async function signIn() {
    console.debug(`Trying to login`);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

export async function signOutUser() {
    signOut(getAuth());
    userStore.signOut();
}

// function initFirebaseAuth() {
//     onAuthStateChanged(getAuth(), authStateObserver);
// }

export function getProfilePicUrl() {
    return getAuth().currentUser?.photoURL || 'https://placeimg.com/80/80/people'
}

export function getCurrentUser(): User | null {
    return getAuth().currentUser;
}

export function getUserName() {
    return getAuth().currentUser?.displayName;
}

export function isUserSignedIn() {
    const loggedIn = !!getAuth().currentUser;
    console.debug(`Logged in? ${loggedIn}`);
    console.debug(`${!!getAuth().currentUser}`);
    return !!getAuth().currentUser;
}

// function authStateObserver(user) {
//     if (user) { // User is signed in!
//       // Get the signed-in user's profile pic and name.
//       let profilePicUrl = getProfilePicUrl();
//       let userName = getUserName();

//     } else { // User is signed out!
//       // Hide user's profile and sign-out button.

      
//     }
//   }

export async function getProducts() {
    const productsCol = collection(db, 'products');
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    console.warn("Fetching from Firebase");
    return productList as Product[];
}

export async function getBlogPosts() {
    const postsCol = collection(db, 'blog');
    const postsSnapshot = await getDocs(postsCol);
    const postList = postsSnapshot.docs.map(doc => doc.data());
    console.warn("Fetching from Firebase");
    return postList as BlogPost[];
}