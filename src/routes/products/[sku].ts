import { getProducts } from '$lib/stores/productStore';

/** @type {import('./__types/[sku]').RequestHandler} */
export async function GET({ params }) {
	const sku: string = params.sku;
	const product = getProducts.find((p) => p.sku.toLowerCase() == sku.toLowerCase());

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
