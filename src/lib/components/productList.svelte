<script lang="ts">
	import ProductCard from '$lib/components/productCard.svelte';

	export let data: any;
</script>

<div class="flex justify-center gap-16 m-12 flex-wrap">
	{#if data && data.productList}
		{#each data.productList as product, i}
			<ProductCard data={product} />
		{/each}
	{/if}
</div>
