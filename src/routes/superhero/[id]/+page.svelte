<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let id = data.id;

    /** @type {import('$lib/models').Superhero} */
    let superhero = data.superhero;
    
    /** @type {import('$lib/models').Superpower[]} */
    let superpowers = data.superpowers;
</script>

<div class="superhero">
  <div class="superhero-id form-group">
    <div class="form-label">Id:</div>
    <div class="form-field">{id}</div>
  </div>

  <div class="superhero-name form-group">
    <div class="form-label">Name:</div> 
    <div class="form-field">{superhero.name}</div>
  </div>
  
  <div class="superhero-description form-group">
    <div class="form-label">Description:</div> 
    <div class="form-field">{superhero.description}</div>
  </div>

  <h2>Their Superpowers</h2>

  <div class="table-wrapper">
    <table class="superpower-table">
      <thead>
        <tr>
          <th>Super Power</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {#each superpowers as superpower}
          <tr class="superpower-row">
            <td>{superpower.superPower}</td>
            <td>{superpower.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <a class="nav nav-left" href="/superhero">Go Back</a>
</div>