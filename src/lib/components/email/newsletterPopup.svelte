<script lang="ts">
	import { browser } from '$app/env';

	import { getProductLineItems } from '$src/lib/utility/strapi/productsApi';

	import NewsLetterForm from './newsLetterForm.svelte';
	let showModal = false;

	if (browser) {
		const lastShown = localStorage.getItem('newsletterPopupShown');

		if (!lastShown) {
			setInterval(() => {
				showModal = true;
				localStorage.setItem('newsletterPopupShown', 'true');
			}, 5000);
		}
	}
</script>

{#if showModal}
	<NewsLetterForm data={{ opened: true }} />
{/if}
