import type { Superhero, SuperheroResponse } from "../models";
import { executeGraphQL } from './graphql.server';

const superheroFragment = `#graphql
    fragment SuperheroFields on Superhero {
        id,
        name,
        description
    }
`;

export async function getSuperhero(id: string): Promise<Superhero> {
    const body = `#graphql
        query Superhero($where: SuperheroFilterInput!) {
            superheroes(where: $where) {
                ...SuperheroFields
            }
        }

        ${superheroFragment}
    `;
    
    const response = await executeGraphQL<SuperheroResponse>(body, {
        where: {
            id: {
                eq: id
            }
        }
    });

    return response.data.superheroes[0];
}

export async function getSuperheroes(): Promise<Superhero[]> {
    var body = `#graphql
        query {
            superheroes {
                ...SuperheroFields
            }
        }

        ${superheroFragment}
    `;

    const response = await executeGraphQL<SuperheroResponse>(body);
    return response.data.superheroes;
}