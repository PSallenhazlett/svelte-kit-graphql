<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let id = data.id;
    let superpower = data.superpower;
    let superheroes = data.superheroes;
</script>

<form id="superpowerForm" class="form">
  <div class="superpower-name form-group">
    <div class="form-label">Super Power:</div> 
    <div class="form-field">
      <input type="text" bind:value={superpower.superPower}/>
    </div>
  </div>
  
  <div class="superpower-description form-group">
    <div class="form-label">Description:</div> 
    <div class="form-field">
      <textarea bind:value={superpower.description}></textarea>
    </div>
  </div>
  
  <div class="superpower-superhero form-group">
    <div class="form-label">Superhero:</div> 
    <div class="form-field">
      <select bind:value={superpower.superheroId}>
        <option value=""></option>
        {#each superheroes as superhero}
          <option value={superhero.id}>{superhero.name}</option>
        {/each}
      </select>
    </div>
  </div>

  <a class="nav nav-left" href="/superpower">Go Back</a>
</form>