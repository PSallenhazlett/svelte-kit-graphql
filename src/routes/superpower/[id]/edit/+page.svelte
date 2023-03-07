<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('$lib/models').Superpower} */
    $: superpower = data.superpower;

    /** @type {import('$lib/models').Superhero[]} */
    let superheroes = data.superheroes;
</script>

<form id="superheroEditForm" class="form" method="POST">
  <div class="superpower-name form-group">
    <div class="form-label">Super Power:</div> 
    <div class="form-field">
      <input type="text" name="name" bind:value={superpower.superPower}/>
    </div>
  </div>
    
  <div class="superpower-description form-group">
    <div class="form-label">Description:</div> 
    <div class="form-field">
      <textarea name="description" bind:value={superpower.description}></textarea>
    </div>
  </div>
  
  <div class="superpower-superpower form-group">
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

  <button>Submit</button>
  
  <input type="hidden" name="superpower" value={JSON.stringify(superpower)}>

  <a class="nav nav-left" href="/superpower">Go Back</a>
</form>