<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let superheroes = data.superheroes;
</script>

<h1>Superheroes</h1>

<ul class="superhero-list">
    {#each superheroes as superhero}
        <li class="superhero">
            <a href="/superhero/{superhero.id}">{superhero.name}</a>
        </li>
    {/each}
</ul>

<a class="nav nav-left" href="/">Go Back</a>