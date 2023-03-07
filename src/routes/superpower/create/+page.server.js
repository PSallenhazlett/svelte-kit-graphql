import * as superpowerService from '$lib/server/superpower.service';
import * as superheroService from "$lib/server/superhero.service";
import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    superheroes: await superheroService.getSuperheroes(),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const superpowerJson = data.get('superpower');

    /** @type {import('$lib/models').Superpower} */
    const superpower = JSON.parse(superpowerJson?.toString() ?? "{}");

    await superpowerService.createSuperpower(superpower);

    throw redirect(302, '/superpower');
  }
};