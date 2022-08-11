<script lang="ts">
	import '$lib/global.css';
	import Header from '../lib/components/header.svelte';
	import Footer from '../lib/components/footer.svelte';
	import MainMenu from '../lib/components/navigation.svelte';
</script>

<Header />
<MainMenu />
<slot />
<Footer />
