import { Categories } from '$lib/Product';
import { getProducts } from '$lib/stores/productStore';

/** @type {import('./__types/[category]').RequestHandler} */
export async function GET({ params }) {

    const category = params.category;

	 const products = getProducts.filter((product) => {
	    const incat: string = params.category.toLowerCase();
	    const outcats = Object.values(product.categories);

		return outcats.some(cat => {
			return incat == Categories[cat].toLowerCase();
		});
	});

	if (!params.category) {
        console.debug("No category param");
		return {
			status: 404,
		};
	}

	return {
		status: 200,
		body: {
			products,
			category
		},
	};
}
