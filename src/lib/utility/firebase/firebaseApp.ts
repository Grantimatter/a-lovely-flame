import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getPerformance} from 'firebase/performance';

import { Firestore, getFirestore, collection, getDocs } from 'firebase/firestore';
import type { Product } from "$lib/Product";

import {
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
    getAuth,
    type User
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