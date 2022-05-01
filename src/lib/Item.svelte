<script lang="ts">
    import type { Item } from './types';

    export let item: Item;
</script>

<div class="mb-2">
    <b>{item.overview.title}</b>:<br />
    {item.details.loginFields.find((field) => field.designation === 'username')?.value}<br />
    {item.details.loginFields.find((field) => field.designation === 'password')?.value}
</div>
