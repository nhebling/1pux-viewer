<script lang="ts">
    import Item from './Item.svelte';
    import type { Vault } from './types';

    export let vault: Vault;
    $: items = vault.items.filter((item) => item.categoryUuid === '001');
</script>

<h5 class="title is-5">Vault: {vault.attrs.name}</h5><br/>
<div class="columns is-multiline is-mobile">
    {#each items as item (item.uuid)}
        <Item {item} />
    {/each}
</div>
