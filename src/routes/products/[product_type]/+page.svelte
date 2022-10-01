<script lang="ts">
	import type { PageData } from './$types';
	import ProductCard from '$src/lib/components/productCard.svelte';

	export let data: PageData;

	let attributes: any;

	$: if (data && data[0]){
		attributes = data[0].attributes;	
	} 
</script>

<div class="m-12">
	<ProductCard data={attributes} />
</div>
