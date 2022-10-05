<script lang="ts">
	import '$lib/global.css';
	import '/styles/fonts.css';
	import Navigation from '$components/navigation.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</svelte:head>

<Navigation>
	<slot />
</Navigation>
