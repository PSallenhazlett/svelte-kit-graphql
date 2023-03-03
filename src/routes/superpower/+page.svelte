<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let superpowers = data.superpowers;
    
</script>

<h1>Super Powers</h1>

<ul class="superpower-list">
    {#each superpowers as superpower}
        <li class="superpower">
            <a href="/superpower/{superpower.id}">{superpower.superPower}</a>
        </li>
    {/each}
</ul>

<a class="nav nav-left" href="/">Go Back</a>