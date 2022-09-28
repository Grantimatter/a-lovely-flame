import { variables } from '$lib/variables';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
	const slug = params.slug;
	return fetch(
		`${variables.STRAPI_API_URL}/fragrances?populate[products][populate][0]=Thumbnail&filters[products][Slug][$eq]=${slug}`
	)
		.then((res) => res.json())
		.then((json) => {
			console.debug(json.data[0].attributes.products.data);
			const product = json.data[0].attributes.products.data.find(product => product.attributes.Slug == slug);
			return {
				fragrances: json.data,
				product
			}
		})
		.catch(() => {
			throw error(400, 'Not Found');
		});
}