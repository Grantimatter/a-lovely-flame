<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Product } from '$src/lib/model/Product';
	import { cartStore, cartProducts, total } from '$src/lib/stores/cartStore';

	function handleCheckoutClick() {
		const cart = JSON.stringify($cartStore);
		fetch('/api/cart/checkout', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: cart,
		})
			.then((res) => res.json())
			.then((data) => {
				console.info('url: ', data.url);
				goto(data.url);
			});
	}

	$: if($cartProducts.length == 0) {
		goto('/');
	}

	function removeProduct(product: Product) {
		cartStore.remove(product);
	}
</script>

<div class="flex flex-col justify-center w-full sm:w-3/4 md:w-1/2 2xl:w-1/2 my-8 shadow-xl">
	<div class="flex flex-col bg-neutral rounded-t-xl pb-8">
		<div class="flex flex-row justify-between mb-0 px-8 pt-8 mb-4 underline">
			<span>Product</span>
			<span>Fragrance</span>
			<span>Price</span>
			<span />
		</div>
		{#each $cartProducts as product}
			<div class="text-xl flex flex-row justify-between gap-3 px-8 ">
				<span class="w-1/5">{product.attributes.Title}</span>
				<span class="w-2/5">{product.fragrance.attributes.Name}</span>
				<span class="w-1/5">${product.attributes.Price}</span>
				<span class="1/5 hover:text-error cursor-pointer" on:click={() => removeProduct(product)}
					>Remove</span
				>
			</div>
		{/each}
	</div>

	<div class="rounded-b-xl bg-primary text-neutral p-4">
		<div class="flex justify-end gap-4 align-middle items-center">
			<span class="font-bold">Total: ${$total}</span>
			{#if $cartProducts.length > 0}
				<button
					class="btn btn-accent shadow-xl text-neutral font-bold"
					on:click={handleCheckoutClick}>Checkout!</button
				>
			{/if}
		</div>
	</div>
</div>
