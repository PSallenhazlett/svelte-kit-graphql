<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('$lib/models').Superhero[]} */
    let superheroes = data.superheroes;
</script>

<div class="table-header">
    <h1>Superheroes</h1>
    
    <div class="table-buttons">
        <a href="/superhero/create"><button>Create</button></a>
    </div>
</div>
<div class="table-wrapper">
    <table class="superhero-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Height</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each superheroes as superhero}
                <tr class="superhero-row">
                    <td>{superhero.name}</td>
                    <td>{superhero.description}</td>
                    <td>{superhero.height}</td>
                    <td>
                        <a href="/superhero/{superhero.id}">View</a>
                        <a href="/superhero/{superhero.id}/edit">Edit</a>
                        <a href="/superhero/{superhero.id}/delete">Delete</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<a class="nav nav-left" href="/">Go Back</a>