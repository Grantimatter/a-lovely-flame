<script lang="ts">
  import { onMount } from "svelte";
    import {cartStore}from '$stores/cartStore';

    onMount(() => {
        cartStore.clear();
    });
</script>

<svelte:head>
    <title>Thanks for shopping! - A Lovely Flame</title>
</svelte:head>

<div class="text-3xl p-6 bg-neutral rounded-xl place-self-center">
    Thank you so much for shopping with us! Please come again soon!
</div>