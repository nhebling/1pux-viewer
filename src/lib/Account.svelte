<script lang="ts">
    import type { Account } from './types';
    import Vault from './Vault.svelte';

    export let account: Account;
</script>

<span>{account.attrs.accountName}</span>

<ul class="menu-list">
    {#each account.vaults as vault (vault.attrs.uuid)}
        <li>
            <Vault {vault} />
        </li>
    {/each}
</ul>
