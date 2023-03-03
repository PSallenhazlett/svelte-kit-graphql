<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let id = data.id;
    $: superhero = data.superhero;
</script>

<form id="superheroEditForm" class="form" method="POST">
    <div class="superhero-name form-group">
      <div class="form-label">Name:</div> 
      <div class="form-field">
        <input type="text" name="name" bind:value={superhero.name}/>
      </div>
    </div>
    
    <div class="superhero-description form-group">
      <div class="form-label">Description:</div> 
      <div class="form-field">
        <textarea name="description" bind:value={superhero.description}></textarea>
      </div>
    </div>
    
    <div class="superhero-height form-group">
      <div class="form-label">Height:</div> 
      <div class="form-field">
        <input type="number"name="height" step="0.01" bind:value={superhero.height}/>
      </div>
    </div>

    <button>Submit</button>
    
    <input type="hidden" name="superhero" value={JSON.stringify(superhero)}>
  
    <a class="nav nav-left" href="/superhero">Go Back</a>
  </form>