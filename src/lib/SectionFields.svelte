<script lang="ts">
    import type { SectionFields } from './types';

    export let sectionFields: SectionFields[];
</script>

<div style="overflow-wrap: break-word;">
    {#each sectionFields as sectionField(sectionField.id)}
        {sectionField.title}:
        {#if sectionField.value.string }
            {sectionField.value.string}<br />
        {:else if sectionField.value.concealed}
            {sectionField.value.concealed}<br />
        {/if}
	{/each}
    
</div>