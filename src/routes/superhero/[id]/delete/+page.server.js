import * as superheroService from '$lib/server/superhero.service';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const id = params.id;

    return {
        id: id,
    };
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
      const data = await request.formData();
      
      const id = data.get('id');
      await superheroService.deleteSuperhero(id?.toString() ?? "");
      
      throw redirect(302, '/superhero');
    }
  };