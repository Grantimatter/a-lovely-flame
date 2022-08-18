<script lang="ts">
	import ImageLoader from './imageLoader.svelte';

	export let data: any;
	const productUri: string = `/products/${data.sku}`;
</script>

<a
	class="card card-compact hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
	href={productUri}
>
	<figure class="w-96 h-72 content-center text-transparent">
		<ImageLoader src="https://picsum.photos/400/300?random=0" alt="Thumbnail for {data.name}" />
	</figure>
	<div class="card-body">
		<div class="card-title flex justify-between">
			<div class="w-16" />
			<h2 class="bg-base-100 rounded-md px-2 py-1 justify-center self-center">{data.name}</h2>
			<div class="badge badge-primary badge-sm p-3 mt-2">${data.price}</div>
		</div>

		<div class="card-content justify-center text-center p-2">
			{data.description}
		</div>
		<div class="card-actions flex flex-wrap justify-start items-center">
			{#if data.notes}
				{#each data.notes as scentNote}
					<div class="badge badge-secondary p-3 mt-2 font-semibold capitalize">
						{scentNote}
					</div>
				{/each}
			{/if}
		</div>
		<div class="mt-1 flex flex-wrap gap-2 justify-end">
			{#if data.categories}
				{#each data.categories as category}
					<div class="badge badge-xs badge-ghost p-3 capitalized">
						{category}
					</div>
				{/each}
			{/if}
		</div>
	</div>
</a>
