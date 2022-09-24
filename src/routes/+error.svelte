<script lang='ts'>
    import {goto} from '$app/navigation';
    import { onMount } from 'svelte';
    onMount(() => {
        goto("/")
    })

</script>

<div class="text-3xl font-extrabold text-center text-red-500">
    Uh oh!, there was an error!
</div>