import * as superpowerService from '$lib/server/superpower.service';
import * as superheroService from "$lib/server/superhero.service";
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  /** @type {import('$lib/models').Superpower} */
  const superPower = await superpowerService.getSuperpower(params.id)

  return {
    id: params.id,
    superpower: superPower,
    superhero: await superheroService.getSuperhero(superPower.superheroId),
  };
}