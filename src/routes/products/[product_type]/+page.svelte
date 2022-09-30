<script lang="ts">
	import { variables } from '$lib/variables';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { productStore } from '$stores/productStore';
	import ProductCard from '$src/lib/components/productCard.svelte';

	export let data: PageData;

	let attributes = data[0].attributes;
	//$: attributes = data[0].attributes;
</script>

<div class="m-12">
	<ProductCard data={attributes} />
</div>
