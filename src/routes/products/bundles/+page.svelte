<script lang="ts">
	import BundleCard from '$components/bundleCard.svelte';

	export let data: any;

	let bundleList: any;
	$: bundleList = data;
</script>

<svelte:head>
    <title>Bundles - A Lovely Flame</title>
</svelte:head>

<div>

</div>


<div class="flex flex-wrap justify-center m-12 gap-12">
	{#if bundleList && bundleList.length > 0}
		{#each bundleList as bundle}
			<BundleCard data={bundle} />
		{/each}
	{:else}
		<h1>No Bundles Found!</h1>
	{/if}
</div>
