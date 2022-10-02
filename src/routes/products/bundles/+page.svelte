<script lang="ts">
	import type { PageData } from './$types';
	import BundleCard from '$src/lib/components/bundleCard.svelte';

	export let data: PageData;
	//let bundles: any[] = [];
	//$: bundles = data;
</script>

<div class="flex flex-row justify-center flex-wrap gap-12 m-12">
	{#each data as bundle}
		<BundleCard data={bundle.attributes} />
	{/each}
</div>
