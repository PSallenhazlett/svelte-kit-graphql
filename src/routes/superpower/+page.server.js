import * as db from '$lib/server/superpower.server';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    superpowers: await db.getSuperpowers()
  };
}