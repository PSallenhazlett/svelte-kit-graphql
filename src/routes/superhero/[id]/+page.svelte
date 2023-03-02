<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let id = data.id;
    let superhero = data.superhero;
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

  <a class="nav nav-left" href="/superhero">Go Back</a>
</div>