<script lang="ts">
    import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
    import { icon as getIcon } from '@fortawesome/fontawesome-svg-core';

    export let icon: IconDefinition;

    $: html = getIcon(icon).html;
</script>

{@html html}
