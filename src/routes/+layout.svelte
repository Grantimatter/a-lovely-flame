<script lang="ts">
	import '$lib/global.css';
	import '/styles/fonts.css';
	import Navigation from '$components/navigation.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<Navigation>
	<slot />
</Navigation>
