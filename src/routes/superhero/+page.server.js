import * as superheroService from '$lib/server/superhero.service';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    superheroes: await superheroService.getSuperheroes()
  };
}