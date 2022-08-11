<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { Categories } from '$lib/product';

	const avatar: string = 'https://placeimg.com/80/80/people';

	const categories = Object.values(Categories).slice(0, Object.keys(Categories).length / 2)

	function searchClicked() {
		goto('/search');
	}
</script>

<div class="navbar bg-base-200">
	<div class="navbar-start" />

	<div class="navbar-center hidden lg:flex">
		<ul tabindex="0" class="menu menu-horizontal p-0">
			<li><a href="/">Home</a></li>
			<li tabindex="0">
				<a href="/products">
					Products
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul
					class="p-2 bg-base-200 z-[50] border-primary border-2 border-opacity-75"
					transition:fade
				>
					{#each categories as category}
						<li><a href={`/products/category/${category}`}>{category}</a></li>
					{/each}
				</ul>
			</li>
		</ul>
	</div>

	<div class="navbar-end gap-2">
		<div class="form-control relative w-72">
			<input type="text" placeholder="Search" class="input input-bordered" />
			<button on:click={searchClicked} class="btn btn-primary absolute top-0 right-0 rounded-l-none"
				>Go!</button
			>
		</div>

		<div class="dropdown dropdown-end">
			<label for="cart-size" tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/></svg
					>
					<span id="cart-size" class="badge badge-sm indicator-item">8</span>
				</div>
			</label>
			<div
				tabindex="0"
				class="mt-3 card card-compact dropdown-content w-52 bg-base-200 border-primary border-2 border-opacity-75 shadow-2xl"
			>
				<div class="card-body">
					<span class="font-bold text-lg">8 Items</span>
					<span class="text-info">Subtotal: $999</span>
					<div class="card-actions">
						<a href="/cart" class="btn btn-primary btn-block">View cart</a>
					</div>
				</div>
			</div>
		</div>

		<div class="dropdown dropdown-end">
			<label for="avatar" tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div id="avatar" class="w-10 rounded-full">
					<img src={avatar} alt="profile avatar" />
				</div>
			</label>
		</div>
	</div>
</div>
