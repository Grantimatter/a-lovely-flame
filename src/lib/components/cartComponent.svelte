<script lang="ts">
	import {cartStore, total} from '$stores/cartStore';
</script>

<div class="flex-none">
	<div class="dropdown dropdown-end">
		<label tabindex="0" class="btn btn-ghost btn-circle">
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
                {#if $cartStore.products.length > 0}
				    <span class="badge badge-sm badge-primary indicator-item">{$cartStore.products.length}</span>
                {/if}
			</div>
		</label>
		<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-neutral ring-primary ring-2 shadow">
            
			<div class="card-body">
                {#if $total > 0}
				<span class="text-base">{$cartStore.products.length} Item{$cartStore.products.length > 1 ? "s" : ""} In Cart</span>
				<span class="text-secondary">Subtotal: ${$total}</span>
				<div class="card-actions">
					<a href="/cart" class="btn btn-primary btn-block">View cart!</a>
					<!-- <button class="btn btn-error btn-block" on:click="{cartStore.clear}">Clear Cart</button>  -->
				</div>
                {:else}
                    <p class="text-xl">Your cart is empty!</p>
                {/if}
			</div>
		</div>
	</div>
	<!-- <div class="dropdown dropdown-end">
		<label tabindex="0" class="btn btn-ghost btn-circle avatar">
			<div class="w-10 rounded-full">
				<img src="https://placeimg.com/80/80/people" />
			</div>
		</label>
		<ul
			tabindex="0"
			class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li>
				<a class="justify-between">
					Profile
					<span class="badge">New</span>
				</a>
			</li>
			<li><a>Settings</a></li>
			<li><a>Logout</a></li>
		</ul>
	</div> -->
</div>
