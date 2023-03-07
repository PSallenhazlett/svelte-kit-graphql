<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('$lib/models').Superpower[]} */
    let superpowers = data.superpowers;
</script>

<div class="table-header">
    <h1>Superpowers</h1>
    
    <div class="table-buttons">
        <a href="/superpower/create"><button>Create</button></a>
    </div>
</div>
<div class="table-wrapper">
    <table class="superpower-table">
        <thead>
            <tr>
                <th>Super Power</th>
                <th>Description</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each superpowers as superpower}
                <tr class="superpower-row">
                    <td>{superpower.superPower}</td>
                    <td>{superpower.description}</td>
                    <td>
                        <a href="/superpower/{superpower.id}">View</a>
                        <a href="/superpower/{superpower.id}/edit">Edit</a>
                        <a href="/superpower/{superpower.id}/delete">Delete</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<a class="nav nav-left" href="/">Go Back</a>