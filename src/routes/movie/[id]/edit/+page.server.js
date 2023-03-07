import * as movieService from '$lib/server/movie.service';
import * as superheroService from '$lib/server/superhero.service';
import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    movie: await movieService.getMovie(params.id),
    superheroes: await superheroService.getSuperheroes(),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const movieJson = data.get('movie');

    /** @type {import('$lib/models').Movie} */
    const movie = JSON.parse(movieJson?.toString() ?? "{}");

    await movieService.updateMovie(movie);

    throw redirect(302, '/movie');
  }
};