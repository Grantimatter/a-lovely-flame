<script lang="ts">
	import type { Fragrances, Product } from '$lib/Product';
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
	<figure class="w-96 h-72 content-center text-transparent">
		{#if product.attributes.Thumbnail}
			<ImageLoader
				src="{variables.STRAPI_URL}{product.attributes.Thumbnail.data.attributes.url}"
				alt="Thumbnail for {product.attributes.Title}}"
			/>
		{/if}
	</figure>
	<div class="card-body">
		<div class="card-title flex justify-between">
			<div class="w-16" />
			<h2 class="bg-base-100 rounded-md px-2 py-1 justify-center self-center">
				{fragrance.attributes.Name}
			</h2>
			<div class="badge badge-primary badge-sm p-3 mt-2">${product.attributes.Price}</div>
		</div>

		<div class="card-content justify-center text-center p-2">
			{fragrance.attributes.Summary}
		</div>
	</div>
</a>
