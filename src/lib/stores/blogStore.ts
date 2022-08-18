import type { BlogPost } from "$lib/BlogPost";
import { writable } from "svelte/store";
import { getBlogPosts } from '../utility/firebase/firebaseApp';

function createBlogPosts() {
	const { subscribe, set, update } = writable<BlogPost[]>([]);

	getBlogPosts().then((postList) => {
		set(postList);
	});

	return {
		subscribe,
		reset: () => set([])
	};
}
export const blogPostList = createBlogPosts();
