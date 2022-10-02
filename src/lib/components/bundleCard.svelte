<script lang="ts">
	import { variables } from '../variables';

	export let data: any;

	$: bundle = data;
	$: productUri = `/products/bundles/${bundle.Slug}`;
	$: description = bundle.Description;
</script>

<div class="w-full h-3/4 sm:h-1/2 md:w-2/5 lg:w-1/3 xl:w-1/5">
	<a
		class="card hover:scale-110 hover:ring-primary hover:ring-2 border-secondary duration-200 bg-neutral shadow-lg hover:shadow-2xl cursor-pointer"
		href={productUri}
	>
		<figure class="h-2/3 text-transparent z-0 object-fill">
			{#if bundle.Thumbnail}
				<img
					src={bundle.Thumbnail.data.attributes.url}
					alt="product thumbnail"
					class="object-cover h-full w-full"
				/>
			{/if}
		</figure>
		
		<div class="card-body z-10 h-1/3">
			<span class="bg-accent text-neutral py-3 px-3 m-0 ml-8 rounded-full place-self-center"
			>${bundle.Savings} Off!</span
		>
			<div class="card-title flex justify-center h-full align-middle items-center">
				<!-- <div class="w-16" /> -->
				<h2 class="rounded-md flex gap-0">
					<span class="bg-base-100 m-0 py-3 px-4 rounded-l-lg">{bundle.Name}</span>
					<span class="bg-primary text-neutral py-3 px-3 m-0 rounded-r-lg">${bundle.Price}</span>
				</h2>
			</div>

			<div class="card-content justify-center text-center p-2">
				<div class="prose xl:prose-xl">
					{@html description}
				</div>
			</div>
		</div>
	</a>
</div>
