import * as superheroService from '$lib/server/superhero.service';
import * as superpowerService from "$lib/server/superpower.service";
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    id: params.id,
    superhero: await superheroService.getSuperhero(params.id),
    superpowers: await superpowerService.getSuperpowersBySuperheroId(params.id),
  };
}