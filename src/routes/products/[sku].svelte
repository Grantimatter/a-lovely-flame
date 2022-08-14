<script lang="ts">
	import { productList } from '$lib/stores/productStore';
	export let sku: string;

	const product = $productList.find(p => p.sku.toLocaleLowerCase() == sku.toLowerCase());
</script>

<svelte:head>
	{#if product}
		<title>{`${product.name} - A Lovely Flame`}</title>
	{/if}
</svelte:head>

{#if product}
	<h1>{product.sku}</h1>
{/if}
