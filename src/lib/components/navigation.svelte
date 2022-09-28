<script lang="ts">
	import Search from '$lib/components/search.svelte';
	import SiteMenu from './siteMenu.svelte';
</script>

<div class="navbar bg-base-200 flex w-screen md:justify-between">
	<SiteMenu />

	<div class="navbar-end w-0 md:w-1/3 h-10">
		<!-- <Search /> -->

		<!-- <div class="dropdown dropdown-end">
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
						<a href="/login">
							
						</a>
					</div>
				</label>
				<a href="/login" class="btn btn-ghost ml-4">Login</a>
		</div>-->
	</div> 
</div>
