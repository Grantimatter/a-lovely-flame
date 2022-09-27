<script lang="ts">
	import '$lib/global.css';
	import '/styles/fonts.css';
	import Header from '../lib/components/header.svelte';
</script>

<div class="flex flex-col justify-between min-h-screen">
	<div>
		<Header />
	</div>
	<div style="min-height: 60vh;" class="flex flex-col items-center justify-center">
		<slot />
	</div>
</div>
