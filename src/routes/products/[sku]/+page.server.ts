import { productList } from '$lib/stores/productStore';

/** @type {import('./$types').PageServerLoad} */
export async function load({ data }) {
	const sku: string = (data.sku as string).toLowerCase();

	return {
		sku
	};
}
