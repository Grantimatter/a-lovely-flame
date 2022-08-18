<script lang='ts'>
    import { signIn, isUserSignedIn, signOutUser } from '$lib/utility/firebase/firebaseApp';
    import { userStore } from '$lib/stores/userStore';
    //import { getCurrentUser } from '$lib/utility/firebase/firebaseApp';
    import { onMount } from 'svelte';

    onMount(async () => {
        await userStore.checkSignIn();
    });
    
</script>

<div class="flex flex-row gap-2">
    <button class="btn btn-primary" on:click={signIn}>Login with SSO</button>
    <button class="btn btn-primary" on:click={userStore.checkSignIn}>Check Login status</button>


    {#if $userStore}
    <button class="btn btn-primary" on:click={signOutUser}>Sign Out</button>
    <button class="btn btn-primary">{$userStore?.displayName}</button>
    <img class="btn btn-ghost btn-circle p-2" src={$userStore?.photoURL} alt='profile pic'/>
    {/if}
</div>