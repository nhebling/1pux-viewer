<script lang="ts">
    import * as zip from '@zip.js/zip.js';
    import Account from '$lib/Account.svelte';
    import type { Account as AccountT } from '$lib/types';
    import Icon from '$lib/Icon.svelte';
    import { faUpload } from '@fortawesome/free-solid-svg-icons';

    let files: FileList;

    $: data = files ? read(files[0]) : null;
    $: data?.then(console.log);

    const read = async (file: File): Promise<{ accounts: AccountT[] }> => {
        const reader = new zip.ZipReader(new zip.BlobReader(file));
        const entries = await reader.getEntries();
        const data = entries.find((entry) => entry.filename === 'export.data');
        if (!data) {
            throw new Error('Could not find Data');
        }
        const content = await data.getData?.(new zip.TextWriter());
        if (!content) {
            throw new Error('Cloud not read content');
        }
        return JSON.parse(content);
    };
</script>

<main class="py-4">
    <section class="container hide-print">
        <div class="is-flex is-align-items-center">
            <h1 class="is-size-3">1pux File Viewer</h1>
            <div class="ml-4 file">
                <label class="file-label">
                    <input class="file-input" type="file" accept="*.1pux" bind:files />
                    <span class="file-cta">
                        <span class="file-icon">
                            <Icon icon={faUpload} />
                        </span>
                        <span class="file-label"> Choose a file... </span>
                    </span>
                </label>
            </div>
        </div>
    </section>

    <hr class="my-4 hide-print" />

    <section class="container">
        {#if data}
            {#await data}
                Lädt...
            {:then content}
                <div class="menu">
                    <ul class="menu-list">
                        {#each content.accounts as account (account.attrs.uuid)}
                            <li>
                                <Account {account} />
                            </li>
                        {/each}
                    </ul>
                </div>
            {/await}
        {/if}
    </section>
</main>

<style>
    @media print {
        .hide-print {
            display: none;
        }
    }
</style>
