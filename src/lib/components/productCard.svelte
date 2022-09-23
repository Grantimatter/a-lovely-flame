<script lang="ts">
	import type { Product } from '$lib/Product';
	import ImageLoader from './imageLoader.svelte';

	export let data: any;
	const productUri: string = `/products/${data.attributes.Slug}`;
</script>

<a
	class="card card-compact hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
	href={productUri}
>
	<figure class="w-96 h-72 content-center text-transparent">
		{#if data.attributes.Thumbnail}
			<ImageLoader
			src="{`http://127.0.0.1:1337`}{data.attributes.Thumbnail.data.attributes.url}"
			alt="Thumbnail for {data.attributes.Title}"
		/>
		{/if}
	</figure>
	<div class="card-body">
		<div class="card-title flex justify-between">
			<div class="w-16" />
			<h2 class="bg-base-100 rounded-md px-2 py-1 justify-center self-center">
				{data.attributes.Title}
			</h2>
			<div class="badge badge-primary badge-sm p-3 mt-2">${data.attributes.Price}</div>
		</div>

		<div class="card-content justify-center text-center p-2">
			{data.attributes.Description}
		</div>
	</div>
</a>
