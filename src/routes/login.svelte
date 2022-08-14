<script lang='ts'>
    import { signIn } from '$lib/utility/firebase/firebaseApp';
</script>

<div>
    <button class="btn btn-primary" onclick={signIn}>Login with SSO</button>
</div>