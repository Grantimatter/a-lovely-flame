<script lang="ts">
	import ProductList from '$lib/components/productList.svelte';
	import type { Fragrances, Product } from '$lib/model/Product';
	export let data: {fragrances: Fragrances[], product: Product};
	
	let {fragrances, product} = data;
	$: ({fragrances, product} = data);
</script>

<svelte:head>
	{#if product}
		<title>{`${product.attributes.Plural} - A Lovely Flame`}</title>
	{/if}
</svelte:head>

{#if fragrances && fragrances.length > 0}
<div class="flex flex-col m-12">
	<h1 class="text-5xl font-semibold mb-14 text-center md:ml-20">{product.attributes.Plural}</h1>

	<ProductList data={{fragrances, product}} />
</div>
{:else}
	<div class="text-5xl font-bold text-center p-16">No products were found!</div>
{/if}
