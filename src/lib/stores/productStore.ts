import type { Product } from "$lib/Product";
import { writable } from "svelte/store";
import { getProducts } from '../utility/firebase/getData';

async function createProducts() {
	const { subscribe, set, update } = writable<Product[]>(await getProducts());

	return {
		subscribe,
		reset: () => set([])
	};
}
export const productList = await createProducts();
