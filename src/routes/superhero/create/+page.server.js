import * as superheroService from '$lib/server/superhero.service';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    
    const superheroJson = data.get('superhero');
    const superhero = JSON.parse(superheroJson?.toString() ?? "{}");

    superhero.movies = [];
    superhero.superpowers = [];

    await superheroService.createSuperhero(superhero);

    throw redirect(302, '/superhero');
  }
};