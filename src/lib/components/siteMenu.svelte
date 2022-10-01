<script lang="ts">
	import { onMount } from 'svelte';
	import { variables } from '$lib/variables';
	import type { Product } from '$lib/model/Product';


	let products: Product[] = [];
	$: products;

	onMount(async () => {
		fetch(`${variables.STRAPI_API_URL}/products/`)
			.then((res) => res.json())
			.then((json) => {
				for (const product of json.data) {
					products.push(product);
					products = products;
				}
			})
			.catch((err) => console.error('Error retreiving products', err));
	});
</script>

