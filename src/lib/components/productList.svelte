<script lang="ts">
	import ProductCard from '$lib/components/productCard.svelte';
	import type { Fragrances, Product } from '$lib/model/Product';

	export let data: { fragrances: Fragrances[]; product: Product };
	let { fragrances, product } = data;
	$: ({ fragrances, product } = data);
</script>

<div class="flex justify-center gap-16 flex-wrap">
	{#each fragrances as fragrance, i}
		<ProductCard data={{ fragrance, product }} />
	{/each}
</div>
