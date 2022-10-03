<script lang="ts">
	import type { PageData } from './$types';
	import ProductCard from '$src/lib/components/productCard.svelte';

	export let data: PageData;

	let attributes: any;

	$: if (data && data){
		attributes = data;
	} 
</script>

<div class="flex flex-row justify-center flex-wrap gap-12 m-12">
	{#each attributes as product}
		<ProductCard data={product.attributes} />
	{/each}
</div>
