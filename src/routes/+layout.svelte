<script lang="ts">
	import '$lib/global.css';
	import Header from '../lib/components/header.svelte';
	import Footer from '../lib/components/footer.svelte';
	import MainMenu from '../lib/components/navigation.svelte';

	import { userStore } from '$lib/stores/userStore';
	import { onMount } from 'svelte';

	onMount( async () => {
		await userStore.checkSignIn();
	});
</script>

<div class="flex flex-col justify-between min-h-screen">
	<div>
		<Header />
	</div>
	<div style="min-height: 60vh;" class="flex flex-col items-center justify-center">
		<slot />
	</div>
</div>
