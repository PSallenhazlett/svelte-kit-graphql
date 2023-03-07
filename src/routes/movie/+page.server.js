import * as movieService from '$lib/server/movie.service';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    movies: await movieService.getMovies()
  };
}