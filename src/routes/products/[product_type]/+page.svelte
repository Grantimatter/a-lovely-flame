<script lang="ts">
	import type { PageData } from './$types';
	import ProductCard from '$src/lib/components/productCard.svelte';

	export let data: PageData;

	let attributes: any;

	$: if (data && data){
		attributes = data;	
	} 
</script>

<div class="m-12 w-full h-full">
	{#each attributes as product}
		<ProductCard data={product.attributes} />
	{/each}
</div>
