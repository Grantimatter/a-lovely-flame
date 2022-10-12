<script lang="ts">
	import { browser } from '$app/env';
	import { prevent_default } from 'svelte/internal';
	import { fly } from 'svelte/transition';

	export let data: any;

	let firstName: string = '';
	let lastName: string = '';
	let email: string = '';
	const inputClasses = 'input input-bordered input-primary w-full';

	function submitForm() {
		if (!email) {
			alert('Please enter a valid email address!');
			return;
		}

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
			}),
		}).then(addSuccessToast);
	}

	let showToast = false;

	function addSuccessToast() {
		showToast = true;
		setInterval(() => {
			showToast = false;
		}, 10000);
	}
</script>

{#if showToast}
	<div class="toast toast-center">
		<div class="alert bg-primary animate-bounce justify-center w-72" transition:fly="{{y:200, duration: 500}}">
			<div class="">
				{#if !firstName}
				<span class="text-center text-neutral">Thanks for joining our newsletter!</span>
				{:else}
				<span class="text-center text-neutral">Thanks for joining our newsletter, {firstName}!</span>
				{/if}
			</div>
		</div>
	</div>
{/if}

{#if !data.opened}
	<label for="my-modal-6" class="btn btn-primary text-neutral modal-button">Sign Up!</label>
{/if}

<input type="checkbox" id="my-modal-6" class="modal-toggle" checked={data.opened} />
<div class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="font-bold text-xl mb-6">
			Sign Up For Our Newsletter For 10% Off Your Next Purchase!
		</h3>
		<form class="flex flex-col w-full">
			<div class="form-control mb-2">
				<label class="label">
					<span class="label-text">First Name</span>
				</label>
				<input
					id="firstName"
					class={inputClasses}
					type="text"
					bind:value={firstName}
					placeholder="Please enter your first name."
				/>
			</div>
			<div class="form-control mb-2">
				<label class="label">
					<span class="label-text">Last Name</span>
				</label>
				<input
					id="lastName"
					class={inputClasses}
					type="text"
					bind:value={lastName}
					placeholder="Please enter your last name."
				/>
			</div>
			<div class="form-control">
				<label class="label">
					<span class="label-text">Email <span class="text-error">*</span></span>
				</label>
				<input
					required
					id="email"
					class={inputClasses}
					type="text"
					bind:value={email}
					placeholder="Please enter your email."
				/>
			</div>
			<div class="modal-action">
				<label for="my-modal-6" class="btn btn-neutral text-base">Cancel</label>
				<label
					for="my-modal-6"
					class="btn btn-primary text-neutral hover:ring-2 ring-secondary"
					on:click={submitForm}>Sign Me Up!</label
				>
			</div>
		</form>
	</div>
</div>
