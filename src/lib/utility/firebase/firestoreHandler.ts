// Import the functions you need from the SDKs you need
import { Firestore, collection, getDocs } from 'firebase/firestore';
import type { Product } from "$lib/Product";
import type { BlogPost } from "$lib/BlogPost";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export async function getProducts(db: Firestore) {
    const productsCol = collection(db, 'products');
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList as Product[];
}

export async function getBlogPosts(db: Firestore) {
    const postsCol = collection(db, 'blog');
    const postsSnapshot = await getDocs(postsCol);
    const postList = postsSnapshot.docs.map(doc => doc.data());
    return postList as BlogPost[];
}
