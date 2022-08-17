import type { PageServerLoad } from './$types';
export const load: PageServerLoad = (data: any) => {
	console.debug(`Loading Categories page: ${data}`);

	return {
		category: data
	}
}

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ data }) {
// 	const category = data.category;
	
// 	if (!data.category) {
// 		console.debug('No category param');
// 		throw new Error(

// 		);
// 		return {
// 			status: 404,
// 		};
// 	}

// 	return {
// 		category
// 	};
// }
