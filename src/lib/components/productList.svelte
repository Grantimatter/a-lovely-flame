<script lang="ts">
	import type { Product } from '$lib/product';
	import ProductCard from '$lib/components/productCard.svelte';
	export let productList: Product[];
</script>

<div class="flex justify-center gap-16 m-12 flex-wrap">
	{#each productList as product, i}
		<ProductCard {product} />
	{/each}
</div>
