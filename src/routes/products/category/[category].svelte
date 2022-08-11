<script context="module">
</script>

<script lang="ts">
	import type { Categories, Product } from '$lib/product';
	import ProductList from '$lib/components/productList.svelte';
	export let products: Product[];
	export let category: Categories;
</script>

<svelte:head>
	<title>{`${category} - A Lovely Flame`}</title>
</svelte:head>

{#if products.length > 0}
	<ProductList productList={products}></ProductList>	
{:else}
	<div class="text-5xl font-bold text-center p-16">No products were found!</div>
{/if}
