<script lang="ts">
	import '$lib/global.css';
	import '/styles/fonts.css';
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import MainMenu from '$components/navigation.svelte';
</script>

<div class="flex flex-col justify-between min-h-screen">
	<div>
		<Header />
		<MainMenu />
	</div>
	<div style="min-height: 60vh;" class="flex items-center justify-center">
		<slot />
		
	</div>
	<Footer />
</div>
