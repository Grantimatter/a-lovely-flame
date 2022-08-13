import { blogPostList } from '$lib/stores/blogStore';

/** @type {import('./__types/[category]').RequestHandler} */
export async function GET({ params }) {

	 const postList = blogPostList;

	if (!params.category) {
        console.debug("No category param");
		return {
			status: 404,
		};
	}

	return {
		status: 200,
		body: {
			postList
		},
	};
}
