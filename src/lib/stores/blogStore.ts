import type { BlogPost } from "$lib/BlogPost";
import { writable } from "svelte/store";
import { getBlogPosts } from '../utility/firebase/firestoreHandler';

async function createBlogPosts() {
	const { subscribe, set, update } = writable<BlogPost[]>(await getBlogPosts());

	return {
		subscribe,
		reset: () => set([])
	};
}
export const blogPostList = await createBlogPosts();
