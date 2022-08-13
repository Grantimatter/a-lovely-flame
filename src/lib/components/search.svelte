<script lang="ts">
import { goto } from "$app/navigation";
    function searchClicked() {
		goto('/search');
	}
</script>

    <button class="material-icons xl:invisible cursor-pointer btn-ghost rounded-full p-1">search</button>

<div class="form-control relative w-72 hidden xl:flex">
    <input type="text" placeholder="Search" class="input input-bordered" />
    <button on:click={searchClicked} class="btn btn-primary absolute top-0 right-0 rounded-l-none"
        >Go!</button
    >
</div>