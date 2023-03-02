import * as db from '$lib/server/superhero.server';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    superheroes: await db.getSuperheroes()
  };
}