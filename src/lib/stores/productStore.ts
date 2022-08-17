import type { Product } from "$lib/Product";
import { writable } from "svelte/store";
import { getProducts } from '../utility/firebase/firebaseApp';

function createProducts() {
	const { subscribe, set, update } = writable<Product[]>([]);

	return {
		subscribe,
		reset: () => set([])
	};
}
export const productList = createProducts();
