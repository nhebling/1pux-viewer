<script lang="ts">
    import SectionFields from './SectionFields.svelte';
    import type { ItemDetailsSection } from './types';

    export let sectionItem: ItemDetailsSection[];
</script>

<div>
    {#each sectionItem as sectionItem(sectionItem.name)}
        {#if sectionItem.fields.length > 0}
            <b><i>Section: {sectionItem.title}</i></b><br/>
		    <SectionFields  sectionFields={sectionItem.fields}/>
        {/if}
	{/each}
</div>