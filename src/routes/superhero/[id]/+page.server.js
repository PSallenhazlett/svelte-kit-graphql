import * as db from '$lib/server/superhero.server';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    id: params.id,
    superhero: await db.getSuperhero(params.id)
  };
}