<script lang="ts">
	import type { Product } from '../../lib/product.svelte';

	export let product: Product;
</script>

{#if product}
	<h1>{product.sku}</h1>
{/if}
