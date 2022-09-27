<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;

	let ourStory = data;
	$: (ourStory = data);
</script>

<div class="card m-12 self-center bg-neutral text-accent sm:w-full lg:w-1/2">
	<div class="card-body">
		<h2 class="card-title place-self-center">{ourStory.title}</h2>
		<p class="mt-4">
			{ourStory.body}
		</p>
	</div>
</div>
