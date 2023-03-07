import * as superpowerService from '$lib/server/superpower.service';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    superpowers: await superpowerService.getSuperpowers()
  };
}