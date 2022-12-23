<script lang="ts">
    import type { Account } from './types';
    import Vault from './Vault.svelte';

    export let account: Account;
</script>

<div>
    <h5 class="title is-5">Account: {account.attrs.accountName}</h5><br/>
    {#each account.vaults as vault (vault.attrs.uuid)}
        <Vault {vault} />
    {/each}
</div>
