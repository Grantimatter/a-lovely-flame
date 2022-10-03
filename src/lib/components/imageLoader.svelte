<script lang="ts">
	import { onMount } from 'svelte';
	import Image from './image.svelte';

	export let data;
	let {src, alt} = data;
	// export let src: string | undefined;
	// export let alt: string;

	let nativeLoading = false;
	let loaded = false;

	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

<div class="bg-base-200" class:animate-pulse={!loaded}>
{#if nativeLoading}
		<Image {src} {alt} bind:loaded/>
{/if}
</div>