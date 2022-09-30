<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let src: string | undefined;
	export let alt: string;

	export let loaded = false;
	let thisImage: HTMLImageElement;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<div class="z-0">
	<img
		{src}
		{alt}
		in:fade={{ duration: 250, delay: 250 }}
    out:fade={{duration: 250}}
		class:loaded
		bind:this={thisImage}
		loading="lazy"
		class="z-0"
	/>
</div>
