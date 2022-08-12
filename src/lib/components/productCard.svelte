<script lang="ts">
	import { type Product, ScentNotes } from '../product';
	import ImageLoader from './imageLoader.svelte';

	export let product: Product;
	const productUri: string = `/products/${product.sku}`;
</script>

<a
	class="card card-compact hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
	href={productUri}
>
	<figure class="w-96 h-72 bg-base-200 content-center">
		<ImageLoader src={product.thumbnail} alt="Thumbnail for {product.name}" />
	</figure>
	<div class="card-body">
		<h2 class="card-title justify-center">{product.name}</h2>

		<div class="card-content justify-center text-center p-2 bg-base-100 rounded-md">
			{product.description}
		</div>
		<div class="card-actions flex flex-wrap justify-start items-center">
			{#each product.notes as scentNote}
				<div class="badge badge-secondary p-3 mt-2 font-semibold capitalize">
					{ScentNotes[scentNote]}
				</div>
			{/each}
			<div class="badge badge-ghost badge-sm p-3">${product.price}</div>
		</div>
	</div>
</a>
