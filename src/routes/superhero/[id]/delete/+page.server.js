import { goto } from '$app/navigation';
import * as db from '$lib/server/superhero.server';
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
      await db.deleteSuperhero(id?.toString() ?? "");
      
      throw redirect(302, '/superhero');
    }
  };