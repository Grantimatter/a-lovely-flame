<script lang="ts">
	import '$lib/global.css';
	import { page } from '$app/stores'
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import MainMenu from '../lib/components/MainMenu.svelte';
	import Transition from '$lib/components/transition.svelte';
</script>

<Header />
<MainMenu />
<!-- <slot /> -->
<Transition url={$page.url}>
	<slot />
</Transition>
<Footer />
