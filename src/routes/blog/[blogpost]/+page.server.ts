import { blogPostList } from '$lib/stores/blogStore';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (data: any) => {
	const postList = blogPostList;

	return {
		postList: postList
	}
}

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params: data }) {

// 	const postList = blogPostList;

// 	if (!data.category) {
//         console.debug("No category param");

// 		return {
// 			status: 404,
// 		};
// 	}

// 	return {
// 		//postList
// 	};
// }
