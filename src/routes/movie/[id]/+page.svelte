<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let id = data.id;

    /** @type {import('$lib/models').Movie} */
    let movie = data.movie;
    
    /** @type {import('$lib/models').Superhero} */
    let superhero = data.superhero;

    /**
     * 
     * @param {Date} date
     */
     function getFormattedDate(date) {
        var dateObj = new Date(date);
        return Intl.DateTimeFormat().format(dateObj.getTime());
    }
</script>

<form id="movieForm" class="form">
  <div class="movie-name form-group">
    <div class="form-label">Title:</div> 
    <div class="form-field">{movie.title}</div>
  </div>
  
  <div class="movie-description form-group">
    <div class="form-label">Description:</div> 
    <div class="form-field">{movie.description}</div>
  </div>
  
  <div class="movie-releaseDate form-group">
    <div class="form-label">Release Date:</div> 
    <div class="form-field">{getFormattedDate(movie.releaseDate)}</div>
  </div>
  
  <div class="movie-instructor form-group">
    <div class="form-label">Director:</div> 
    <div class="form-field">{movie.instructor}</div>
  </div>

  <div class="movie-superhero form-group">
    <div class="form-label">Superhero:</div> 
    <div class="form-field">{superhero.name}</div>
  </div>

  <a class="nav nav-left" href="/movie">Go Back</a>
</form>