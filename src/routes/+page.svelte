<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	export let data;
</script>

<svelte:head>
	<title>A Lovely Flame - Our Story</title>
</svelte:head>

<img src={logo} alt="A Lovely Flame Logo" class="w-40 m-8" />

<p class="text-5xl" style="font-family: Great Vibes;">A Lovely Flame</p>

<div class="flex flex-col justify-center items-center sm:w-full lg:w-2/3">
	<div class="card relative top-0 mt-10 self-center bg-primary text-primary-content rounded-b-none">
		<div class="card-body">
			<h2 class="card-title place-self-center">Our Story</h2>
			<p class="mt-4">
				You are worthwhile. At your highest of highs and even at your lowest of lows, you are worth
				more than anything. At A Lovely Flame, we believe in self-care that’s as worthy as you. We
				believe in “Treat Yourself Day”, every day. We believe in you. We want you to know you can
				believe in us too.
			</p>

			<p class="mt-4">
				With products that are vegan, cruelty-free, toxin-free and phthalate-free, you can trust
				that we love you just as much as you should. As a small business, we pride ourselves on our
				handmade products in hopes that they can bring you as much joy as they bring us, but without
				all that nasty stuff that a lot of other products include.
			</p>

			<p class="mt-4">
				Our mission at A Lovely Flame is simple. We want to inspire you to love yourself in brand
				new ways. Self-care is a huge facet of how we show ourselves we care. For us, self-care is
				learning to love all of our “less than pretty” parts of ourselves as well as dealing with
				the history of who we are and where we come from.
			</p>
			<p class="mt-4">
				Our mission at A Lovely Flame is simple. We want to inspire you to love yourself in brand
				new ways. Self-care is a huge facet of how we show ourselves we care. For us, self-care is
				learning to love all of our “less than pretty” parts of ourselves as well as dealing with
				the history of who we are and where we come from.
			</p>
			<p class="mt-4">
				Many of us are survivors of child abuse, whether we recognize it or not. The emotional
				maltreatment that’s intrinsic to past eras of raising children can cause generational trauma
				that seems impossible to escape from, but we can. It is our hope through our YouTube
				channel, social media accounts and our self-care products, to help you find you.
			</p>
		</div>
		
	</div>
	<div class="relative w-full bg-neutral p-8 rounded-b-2xl mb-4">
		<div class="flex flex-col justify-center items-center">
			<span class="footer-title label-text">Sign up for our newsletter!</span>

			<label for="signup-modal" class="btn btn-primary modal-button">Sign Up!</label>
			<input type="checkbox" id="signup-modal" class="modal-toggle" />
			<label for="signup-modal" class="modal cursor-pointer modal-bottom sm:modal-middle">
				<iframe
					title="newsletter"
					class="w-full h-full sm:w-4/12 sm:h-4/6 max-w-5xl"
					src="https://cdn.forms-content.sg-form.com/a0fe7951-39df-11ed-88d6-f6226295fe4d"
				/>
			</label>
		</div>

		<div />
	</div>
	
</div>
