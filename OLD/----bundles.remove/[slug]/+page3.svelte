<script lang="ts">
  import BundleCard from '$src/lib/components/bundleCard.svelte';
	import { variables } from '$src/lib/variables';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';
    
    export let data: PageData;

	let bundle: any;
    $: console.log(bundle);

	onMount(() => {
		fetch(`${variables.STRAPI_API_URL}/bundles?filters[Slug][$eq]=${data.Slug}?populate=Thumbnail`)
			.then((res) => res.json())
			.then((json) => {
                bundle = json.data[0].attributes;
                return json.data[0].attributes;
            });
	});
</script>

{#if bundle}
    <BundleCard data={bundle} />
{/if}