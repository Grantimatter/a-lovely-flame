// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from '../../../env';
import type { Product } from "$lib/Product";
import type { BlogPost } from "$lib/BlogPost";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getProducts() {
    const productsCol = collection(db, 'products');
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    console.debug("\n");
    productList.forEach(p => console.debug(p));
    console.debug("\n");
    return productList as Product[];
}

export async function getBlogPosts() {
    const postsCol = collection(db, 'blog');
    const postsSnapshot = await getDocs(postsCol);
    const postList = postsSnapshot.docs.map(doc => doc.data());

    return postList as BlogPost[];
}
