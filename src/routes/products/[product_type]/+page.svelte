<script lang="ts">
	import type { PageData } from './$types';
	import ProductCard from '$src/lib/components/productCard.svelte';

	export let data: PageData;
</script>

<div class="flex flex-row justify-center flex-wrap gap-12 m-12">
	{#each data || [] as product}
		<ProductCard data={product.attributes} />
	{/each}
</div>
