import * as superheroService from '$lib/server/superhero.service';
import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    id: params.id,
    superhero: await superheroService.getSuperhero(params.id)
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const superheroJson = data.get('superhero');

    /** @type {import('$lib/models').Superhero} */
    const superhero = JSON.parse(superheroJson?.toString() ?? "{}");

    superhero.movies = [];
    superhero.superpowers = [];

    await superheroService.updateSuperhero(superhero);
    
    throw redirect(302, '/superhero');
  }
};