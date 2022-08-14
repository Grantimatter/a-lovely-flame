<script lang="ts">
	import type { Product } from '$lib/Product';
	import ProductCard from '$lib/components/productCard.svelte';
	export let productList: Product[];
</script>

<div class="flex justify-center gap-16 m-12 flex-wrap">
	{#if productList}
		{#each productList as product, i}
			<ProductCard {product} />
		{/each}
	{/if}
</div>
