import * as movieService from '$lib/server/movie.service';
import * as superheroService from "$lib/server/superhero.service";
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  /** @type {import('$lib/models').Movie} */
  const movie = await movieService.getMovie(params.id);

  return {
    id: params.id,
    movie: movie,
    superhero: await superheroService.getSuperhero(movie.superheroId),
  };
}