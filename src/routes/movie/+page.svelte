<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('$lib/models').Movie[]} */
    let movies = data.movies;

    /**
     * 
     * @param {Date} date
     */
    function getFormattedDate(date) {
        var dateObj = new Date(date);
        return Intl.DateTimeFormat().format(dateObj.getTime());
    }
</script>

<div class="table-header">
    <h1>Movies</h1>
    
    <div class="table-buttons">
        <a href="/movie/create"><button>Create</button></a>
    </div>
</div>
<div class="table-wrapper">
    <table class="movie-table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Director</th>
                <th>Release Date</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each movies as movie}
                <tr class="movie-row">
                    <td>{movie.title}</td>
                    <td>{movie.description}</td>
                    <td>{movie.instructor}</td>
                    <td>{getFormattedDate(movie.releaseDate)}</td>
                    <td>
                        <a href="/movie/{movie.id}">View</a>
                        <a href="/movie/{movie.id}/edit">Edit</a>
                        <a href="/movie/{movie.id}/delete">Delete</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<a class="nav nav-left" href="/">Go Back</a>