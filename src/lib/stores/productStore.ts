import type { Product } from '$lib/model/Product';
import { getAllProducts } from '$lib/utility/strapi/productsApi';
import { writable } from 'svelte/store';

function createProducts() {
	const { subscribe, set, update } = writable<Product[]>([]);

	getAllProducts().then(
		(res) => {
			set(res)
		}
	);

	return {
		subscribe,
		reset: () => set([])
	};
}

export const productStore = createProducts();
