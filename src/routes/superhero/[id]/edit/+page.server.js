import * as db from '$lib/server/superhero.server';
import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    id: params.id,
    superhero: await db.getSuperhero(params.id)
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    
    const superheroJson = data.get('superhero');
    const superhero = JSON.parse(superheroJson?.toString() ?? "{}");

    superhero.movies = [];
    superhero.superpowers = [];

    await db.updateSuperhero(superhero);
    
    throw redirect(302, '/superhero');
  }
};