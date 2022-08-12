<script lang="ts">
	import { type Product, ScentNotes, Categories } from '../product';
	import ImageLoader from './imageLoader.svelte';

	export let product: Product;
	const productUri: string = `/products/${product.sku}`;

	function spaceCamel(input: string): string {
		return input.replace(/([A-Z])/g, ' $1').trim()
	}
</script>

<a
	class="card card-compact hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
	href={productUri}
>
	<figure class="w-96 h-72 bg-base-200 content-center">
		<ImageLoader src={product.thumbnail} alt="Thumbnail for {product.name}" />
	</figure>
	<div class="card-body">

		<div class="card-title flex justify-between">
			<div class="w-16"></div>
			<h2 class="bg-base-100 rounded-md px-2 py-1 justify-center self-center">{product.name}</h2>
			<div class="badge badge-primary badge-sm p-3 mt-2">${product.price}</div>

		</div>

		<div class="card-content justify-center text-center p-2">
			{product.description}
		</div>
		<div class="card-actions flex flex-wrap justify-start items-center">
			{#each product.notes as scentNote}
				<div class="badge badge-secondary p-3 mt-2 font-semibold capitalize">
					{ScentNotes[scentNote]}
				</div>
			{/each}
		</div>
		<div class="mt-1 flex flex-wrap gap-2 justify-end">
			{#each product.categories as category}
			<div class="badge badge-xs badge-ghost p-3">
				{spaceCamel(Categories[category])}
			</div>
			{/each}
		</div>
	</div>
</a>
