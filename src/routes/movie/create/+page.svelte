<script>
    import DateField from '$lib/date-field.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('$lib/models').Movie} */
    $: movie = {
      id: "",
      title: "",
      description: "",
      releaseDate: new Date(),
      instructor: "",
      superheroId: "",
    }

    /** @type {import('$lib/models').Superhero[]} */
    let superheroes = data.superheroes;
</script>

<form id="movieEditForm" class="form" method="POST">
    <div class="movie-title form-group">
      <div class="form-label">Title:</div> 
      <div class="form-field">
        <input type="text" name="title" bind:value={movie.title}/>
      </div>
    </div>
    
    <div class="movie-description form-group">
      <div class="form-label">Description:</div> 
      <div class="form-field">
        <textarea name="description" bind:value={movie.description}></textarea>
      </div>
    </div>

    <div class="movie-releaseDate form-group">
      <div class="form-label">Release Date:</div> 
      <div class="form-field">
        <DateField bind:value={movie.releaseDate} />
      </div>
    </div>
  
    <div class="movie-director form-group">
      <div class="form-label">Director:</div> 
      <div class="form-field">
        <input type="text" name="instructor" bind:value={movie.instructor}/>
      </div>
    </div>
    
    <div class="movie-movie form-group">
      <div class="form-label">Superhero:</div> 
      <div class="form-field">
        <select bind:value={movie.superheroId}>
          <option value=""></option>
          {#each superheroes as superhero}
            <option value={superhero.id}>{superhero.name}</option>
          {/each}
        </select>
      </div>
    </div>

    <button>Submit</button>
    
    <input type="hidden" name="movie" value={JSON.stringify(movie)}>
  
    <a class="nav nav-left" href="/movie">Go Back</a>
  </form>