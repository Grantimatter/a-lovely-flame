<script lang="ts">
	import '$lib/global.css';
	import Header from '../lib/components/header.svelte';
	import Footer from '../lib/components/footer.svelte';
	import MainMenu from '../lib/components/navigation.svelte';
</script>

<div class="flex flex-col justify-between min-h-screen">
	<div>
		<Header />
		<MainMenu />
	</div>
	<div class="flex items-center justify-center">
		<slot />
	</div>
	<Footer />
</div>
