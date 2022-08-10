<script lang="ts">
	import { type Product, ScentNotes } from '../product.svelte';
	import { slide, fade, fly } from 'svelte/transition';

	export let product: Product;
	const productUri: string = `/product/${product.sku}`;
</script>

<a
	class="card card-compact hover:scale-110 border-secondary duration-200 w-fit max-w-sm bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
	href={productUri}
>
	<figure class="w-full bg-base-200" class:animate-pulse={!product.thumbnail}>
		{#if product.thumbnail}
			<img src={product.thumbnail} alt="Thumbnail for {product.name}" />
		{/if}
	</figure>
	<div class="card-body">
		<h2 class="card-title justify-center">{product.name}</h2>

		<div class="card-content justify-center text-center">
			{product.description}
		</div>
		<div class="card-actions flex flex-wrap justify-start items-center">
			{#each product.notes as scentNote}
				<div class="badge badge-secondary p-3 font-semibold capitalize">
					{ScentNotes[scentNote]}
				</div>
			{/each}
			<div class="badge badge-ghost badge-sm p-3">${product.price}</div>
		</div>
	</div>
</a>
