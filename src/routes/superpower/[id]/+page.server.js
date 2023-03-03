import * as db from '$lib/server/superpower.server';
import * as superheroService from "$lib/server/superhero.server";
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    id: params.id,
    superpower: await db.getSuperpower(params.id),
    superheroes: await superheroService.getSuperheroes()
  };
}