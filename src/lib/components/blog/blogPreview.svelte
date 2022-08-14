<script lang="ts">
	import type { BlogPost } from '$lib/BlogPost';

	export let blogPost: BlogPost;
</script>

<div class="card card-compact bg-neutral w-full">
	<div class="card-body">
		<div class="card-title">
			<h2 class="text-center">{blogPost.title}</h2>
		</div>
		<div class="card-content">
			<p>
				{blogPost.content}
			</p>
		</div>
	</div>
</div>
