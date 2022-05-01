<script lang="ts">
    import Item from './Item.svelte';
    import type { Vault } from './types';

    export let vault: Vault;
    $: items = vault.items.filter((item) => item.categoryUuid === '001');
</script>

<span>
    {vault.attrs.name}
</span>

<ul class="menu-list">
    {#each items as item (item.uuid)}
        <li>
            <Item {item} />
        </li>
    {/each}
</ul>
