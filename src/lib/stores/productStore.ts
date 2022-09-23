import type { Product } from '$lib/Product';
import { getAllProducts } from '$lib/utility/strapi/productCms';
import { writable } from 'svelte/store';

function createProducts() {
	const { subscribe, set, update } = writable<Product[]>([]);

	getAllProducts().then(
		(productList) => {
			set(productList);
		}
	);

	return {
		subscribe,
		reset: () => set([])
	};
}

export const productList = createProducts();
