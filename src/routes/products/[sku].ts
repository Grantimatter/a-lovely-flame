import { Categories } from '$lib/product';
import { getProducts } from '$lib/stores';

/** @type {import('./__types/[sku]').RequestHandler} */
export async function GET({ params }) {
	console.debug(`Getting product with SKU: ${params.sku}`);

	let product = getProducts.find((p) => p.sku == params.sku);

	if (!product) {
		return {
			status: 404,
		};
	}

	return {
		status: 200,
		body: {
			product,
		},
	};
}
