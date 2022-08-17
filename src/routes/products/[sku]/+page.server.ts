import { productList } from '$lib/stores/productStore';

/** @type {import('./__types/[sku]').RequestHandler} */
export async function GET({ params }) {
	const sku: string = (params.sku as string).toLowerCase();

	return {
		status: 200,
		body: {
			sku
		},
	};
}
