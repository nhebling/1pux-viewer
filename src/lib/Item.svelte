<script lang="ts">
    import Section from './Section.svelte';
    import type { Item } from './types';

    export let item: Item;
</script>

<div class="column is-one-third" style="break-inside: avoid">
    <article class="box">
        <div class="content">
            <h5 class="title is-5">{item.overview.title}</h5>
            <hr>
            <b>Username:</b> {item.details.loginFields.find((field) => field.designation === 'username')?.value}<br/>
            <b>Password:</b> {item.details.loginFields.find((field) => field.designation === 'password')?.value}<br/>
            <b>Website:</b> {item.overview.url}<br/><br/>
            {#if item.details.sections.length > 0}
                <Section sectionItem={item.details.sections}/>
            {/if}
        </div>
    </article>
</div>
