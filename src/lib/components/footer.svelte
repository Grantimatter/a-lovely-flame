<script>
	import instagram from '$src/instagram.svg';
	import tiktok from '$src/tiktok.svg';
	import facebook from '$src/facebook.svg';
</script>

<footer class="footer pt-6 pb-7 bg-neutral text-base-content justify-center flex flex-wrap gap-24">
	<div class="w-1/8">
		<span class="footer-title">Company</span>
		<a href="/our-story" class="link link-hover">About Us</a>
	</div>

	<div class="flex flex-col justify-center items-end w-1/4">
		<span class="footer-title label-text">Sign up for our newsletter!</span>

		<div class="form-control">
				<label for="signup-modal" class="btn btn-primary modal-button text-neutral self-center "
					>Sign Up!
				</label>
				<input type="checkbox" id="signup-modal" class="modal-toggle" />
				<label for="signup-modal" class="modal cursor-pointer modal-bottom md:modal-middle w-full">
					<label class="object-contain w-fit" for="">
							<iframe
						title="newsletter"
						class="h-full w-full aspect-[300/581]"
						src="https://cdn.forms-content.sg-form.com/a0fe7951-39df-11ed-88d6-f6226295fe4d"
					/>
					</label>
				</label>
		</div>
	</div>

	<div class="w-full justify-center md:w-1/4 m-4">
		<span class="footer-title">Social Media</span>
		<div class="flex gap-2">
      <a href="https://www.facebook.com/alovelyflameco" target="_blank"
				><img src={facebook} class="bg-primary rounded-xl" alt="Our Facebook" /></a
			>
			<a href="https://www.instagram.com/alovelyflameco" target="_blank"
				><img src={instagram} class="bg-primary rounded-xl" alt="Our Insagram" /></a
			>
			<a href="https://www.tiktok.com/@alovelyflameco" target="_blank"
				><img src={tiktok} class="bg-primary rounded-xl" alt="Our TikTok" /></a
			>
      
		</div>
	</div>

	<div class="w-1/">
		<span class="footer-title">Legal</span>
		<a href="/legal/privay-policy" class="link link-hover">Privacy Policy</a>
		<a href="/legal/terms-of-service" class="link link-hover">Terms of Service</a>
	</div>
</footer>
