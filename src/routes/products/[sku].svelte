<script lang="ts">
	import type { Product } from '../../lib/Product';

	export let product: Product;
</script>

<svelte:head>
	<title>{`${product.name} - A Lovely Flame`}</title>
</svelte:head>

{#if product}
	<h1>{product.sku}</h1>
{/if}
