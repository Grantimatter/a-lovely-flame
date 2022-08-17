import { firebaseConfig } from '../../../env';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
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

console.debug("Initializing firebase app");

// Init firebase
const app = initializeApp(firebaseConfig);
// Get database for firebase project
const db = getFirestore(app);
// Get auth for firebase project
const auth = getAuth(app);
// Get performance for firebase project
const performance = getPerformance(app);

export async function signIn() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

export async function signOutUser() {
    signOut(getAuth());
}

// function initFirebaseAuth() {
//     onAuthStateChanged(getAuth(), authStateObserver);
// }

function getProfilePicUrl() {
    return getAuth().currentUser?.photoURL || '/images/profile_placeholder.png'
}

function getUserName() {
    return getAuth().currentUser?.displayName;
}

function isUserSignedIn() {
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
    return productList as Product[];
}

export async function getBlogPosts() {
    const postsCol = collection(db, 'blog');
    const postsSnapshot = await getDocs(postsCol);
    const postList = postsSnapshot.docs.map(doc => doc.data());
    return postList as BlogPost[];
}