<script lang="ts">
	export let data: any;

	let product = data;

	$: product = data;
	$: productType = product.ProductType.data.attributes;
	$: productUri = `products/${productType.Slug}/${product.Slug.toLowerCase()}`;
	$: fragrance = product.Fragrance.data.attributes;
	$: console.info("Fragrance:", fragrance);
</script>

<div class="w-full h-3/4 sm:h-1/2 md:w-2/5 lg:w-1/3 xl:w-1/5">
	<a
		class="card hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
		href={productUri}
	>
		<figure class="h-2/3 text-transparent z-0 object-fill">
			{#if product.Thumbnail}
				<img
					src={product.Thumbnail.data.attributes.url}
					alt="product thumbnail"
					class="object-cover h-full w-full"
				/>
			{/if}
		</figure>
		<div class="card-body z-10 h-1/3">
			<div class="card-title flex justify-center h-full align-middle items-center">
				<!-- <div class="w-16" /> -->
				<h2 class="rounded-md flex gap-0">
					<span class="bg-base-100 m-0 py-3 px-4 rounded-l-lg">{product.Title}</span>
					<span class="bg-primary text-neutral py-3 px-3 m-0 rounded-r-lg">${productType.Price}</span
					>
				</h2>
			</div>

			<div class="card-content justify-center text-center p-2">
				<div class="mb-2">
					{#if fragrance}
						{#each fragrance.ScentNotes.data || [] as scentNote}
							<div class="badge badge-secondary font-semibold">{scentNote.attributes.Title}</div>
						{/each}
					{/if}
				</div>
				{#if fragrance}
					<div class="prose xl:prose-xl">
						{@html fragrance.attributes.Summary}
					</div>
				{/if}
			</div>
		</div>
	</a>
</div>
