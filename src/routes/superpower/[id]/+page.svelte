<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let id = data.id;

    /** @type {import('$lib/models').Superpower} */
    let superpower = data.superpower;
    
    /** @type {import('$lib/models').Superhero} */
    let superhero = data.superhero;
</script>

<form id="superpowerForm" class="form">
  <div class="superpower-name form-group">
    <div class="form-label">Super Power:</div> 
    <div class="form-field">{superpower.superPower}</div>
  </div>
  
  <div class="superpower-description form-group">
    <div class="form-label">Description:</div> 
    <div class="form-field">{superpower.description}</div>
  </div>
  
  <div class="superpower-superhero form-group">
    <div class="form-label">Superhero:</div> 
    <div class="form-field">{superhero.name}</div>
  </div>

  <a class="nav nav-left" href="/superpower">Go Back</a>
</form>