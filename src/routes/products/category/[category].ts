import { Categories } from '$lib/product';
import { getProducts } from '$lib/stores';

/** @type {import('./__types/[category]').RequestHandler} */
export async function GET({ params }) {

    const category = params.category;

	 const products = getProducts.filter((element) => {
	    const incat = Categories[params.category];
	    const outcats = element.categories;
	    return outcats.includes(incat);
	});

	if (!params.category) {
        console.debug("No category param")
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
