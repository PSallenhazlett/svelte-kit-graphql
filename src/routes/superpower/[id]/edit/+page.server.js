import * as superpowerService from '$lib/server/superpower.service';
import * as superheroService from '$lib/server/superhero.service';
import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    superpower: await superpowerService.getSuperpower(params.id),
    superheroes: await superheroService.getSuperheroes(),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const superpowerJson = data.get('superpower');

    console.log(superpowerJson);

    /** @type {import('$lib/models').Superpower} */
    const superpower = JSON.parse(superpowerJson?.toString() ?? "{}");

    await superpowerService.updateSuperpower(superpower);

    throw redirect(302, '/superpower');
  }
};