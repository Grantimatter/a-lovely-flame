<script lang="ts">
	import ProductList from '$lib/components/productList.svelte';
	export let data: any;

	$: ({products, category} = data);
</script>

<svelte:head>
	<title>{`${category} - A Lovely Flame`}</title>
</svelte:head>

{#if products.length > 0}
	<ProductList productList={products}></ProductList>
{:else}
	<div class="text-5xl font-bold text-center p-16">No products were found!</div>
{/if}
