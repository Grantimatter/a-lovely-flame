<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$stores/cartStore';

	export let data: any;
	const customer = data.customer_details;

	onMount(() => {
		cartStore.clear();
		console.info('Response: ', data);
	});
</script>

<svelte:head>
	<title>Thanks for shopping! - A Lovely Flame</title>
</svelte:head>

{#if data}
	<div class="text-3xl p-6 bg-neutral rounded-xl place-self-center">
		<div class="text-center">
			<p>Thanks so much for shopping with us, {customer.name},</p>
            <p>Please come again soon!</p>
		</div>
        <div class="mt-4 bg-base-100 p-3 rounded-lg text-center">
            <div>
                
            </div>
            <div>
                Total: ${data.amount_total / 100}
            </div>
        </div>
	</div>
{:else}
	<div class="text-3xl p-6 bg-neutral rounded-xl place-self-center">
		Thanks so much for shopping with us, Please come again soon!
	</div>
{/if}
