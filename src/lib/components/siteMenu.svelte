<script lang="ts">
	import { onMount } from 'svelte';
	import { variables } from '$lib/variables';
	import { fade } from 'svelte/transition';
	import type { Product } from '$lib/model/Product';
	import logo from '$src/logo.svg';
	import { set_attributes } from 'svelte/internal';


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

