<script lang="ts">
	export let data: any;

	let attributes = data;
	$: attributes = data;
	let productUri: string = `/products/${
		attributes.product_type.data.attributes.Slug
	}/${attributes.Slug.toLowerCase()}`;

	$: product = data;
	$: fragrances = data.Fragrances.data;
</script>

<div class="w-full h-3/4 sm:h-1/2 md:w-2/5 lg:w-1/3 xl:w-1/5">
	<a
		class="card hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
		href={productUri}
	>
		<figure class="h-2/3 text-transparent z-0 object-fill">
			{#if attributes.Thumbnail}
				<img
					src={attributes.Thumbnail.data.attributes.url}
					alt="product thumbnail"
					class="object-cover h-full w-full"
				/>
			{/if}
		</figure>
		<div class="card-body z-10 h-1/3">
			<div class="card-title flex justify-center h-full align-middle items-center">
				<!-- <div class="w-16" /> -->
				<h2 class="rounded-md flex gap-0">
					<span class="bg-base-100 m-0 py-3 px-4 rounded-l-lg">{attributes.Title}</span>
					<span class="bg-primary text-neutral py-3 px-3 m-0 rounded-r-lg">${attributes.Price}</span
					>
				</h2>
			</div>

			<div class="card-content justify-center text-center p-2">
				{#if fragrances}
					<div class="mb-2">
						{#each fragrances as fragrance}
							{#each fragrance.attributes.scent_notes.data as scentNote}
								<div class="badge badge-secondary font-semibold">{scentNote.attributes.Title}</div>
							{/each}
						{/each}
					</div>
					{#if fragrances[0]}
						<div class="prose xl:prose-xl">
							{@html fragrances[0].attributes.Summary}
						</div>
					{/if}
				{/if}
			</div>
		</div>
	</a>
</div>
