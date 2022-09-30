<script lang="ts">
	import type { Fragrances, Product } from '$lib/model/Product';
	import { variables } from '$lib/variables';
	import ImageLoader from './imageLoader.svelte';

	export let data: { fragrance: Fragrances; product: Product };
	let { fragrance, product } = data;
	$: ({ fragrance, product } = data);
	//console.debug('DATA: ', fragrance);
	const productUri: string = `/products/${product.attributes.Slug.toLowerCase()}/${fragrance.attributes.SKU.toLowerCase()}`;
</script>

<a
	class="card card-compact w-96 h-96 hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
	href={productUri}
>
	<figure class="h-2/3 text-transparent z-0 object-fill">
		{#if product.attributes.Thumbnail}
		<img src={product.attributes.Thumbnail.data.attributes.url} class="object-cover h-full w-full"/>
			<!-- <ImageLoader
			data={
			src: {product.attributes.Thumbnail.data.attributes.url},
			alt:{"Thumbnail for {product.attributes.Title}"}
			}		
			/> -->
		{/if}
	</figure>
	<div class="card-body z-10 h-1/3">
		<div class="card-title flex justify-center h-full align-middle items-center">
			<!-- <div class="w-16" /> -->
			<h2 class="rounded-md flex gap-0">
				<span class="bg-base-100 m-0 py-3 px-4 rounded-l-lg">{fragrance.attributes.Name}</span>
				<span class="bg-primary text-neutral py-3 px-3 m-0 rounded-r-lg">${product.attributes.Price}</span>
				
			</h2>
		</div>

		<div class="card-content justify-center text-center p-2">
			{fragrance.attributes.Summary}
		</div>
	</div>
</a>
