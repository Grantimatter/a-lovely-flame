<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import type { Product } from '$src/lib/model/Product';
	import { cartStore, cartProducts, total } from '$src/lib/stores/cartStore';

	function handleCheckoutClick() {
		if (!browser) return;
		const cart = JSON.stringify($cartProducts);

		fetch('/api/cart/checkout', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: cart,
		})
			.then((res) => res.json())
			.then((data) => {
				goto(data.url);
			});
	}

	

	$: if (browser && $cartProducts.length == 0) {
		goto('/');
	}

	function removeProduct(product: Product) {
		cartStore.remove(product);
	}
</script>

<div class="w-fit place-self-center m-8">
	<div class="bg-neutral rounded-t-xl mb-0 pt-6 px-2 pb-2">
		<div class="grid grid-cols-2 gap-4 justify-items-center">
			<div class="text-2xl font-semibold" style="grid-column: 1">Product</div>
			<div class="text-2xl font-semibold" style="grid-column: 2">Price</div>
		</div>
		<div class="grid grid-cols-2 gap-4 justify-items-start p-8 mt-6 bg-base-100 rounded-xl m-8">
			{#each $cartProducts as product}
				<div class="col-span-1">
					<i
						class="material-icons hover:text-error hover:scale-125 cursor-pointer mr-4 align-middle"
						on:click={() => removeProduct(product)}>cancel</i
					>
					<span>{product.Title}</span>
				</div>
				<div class="col-span-1 place-self-center">
					${product.Price}
				</div>
			{/each}
		</div>
	</div>

	<div class="rounded-b-xl bg-primary text-neutral p-4 mt-0">
		<div class="flex justify-end gap-4 align-middle items-center">
			<span class="font-bold">Subtotal: ${$total}</span>
			{#if $cartProducts.length > 0}
				<button
					class="btn btn-accent shadow-xl text-neutral font-bold"
					on:click={handleCheckoutClick}>Checkout!</button
				>
			{/if}
		</div>
	</div>
</div>

<div
	class="flex flex-col justify-center self-center w-full m-2 sm:w-3/4 md:w-1/2 2xl:w-1/3 my-8 shadow-xl"
>
	<div class="flex flex-col bg-neutral rounded-t-xl pb-8 gap-4">
		<div class="flex flex-row justify-center px-8 pt-8 mb-4 underline gap-32">
			<span class="">Product</span>
			<span class="">Price</span>
		</div>
		{#each $cartProducts as product}
			<div class="text-xl flex flex-row justify-center gap-12 px-8 ">
				<span class="">{product.Title}</span>
				<span class="">${product.Price}</span>
				<span class="hover:text-error cursor-pointer" on:click={() => removeProduct(product)}
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
