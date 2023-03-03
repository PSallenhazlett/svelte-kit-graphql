import type { CreateSuperheroResponse, Superhero, SuperheroResponse, UpdateSuperheroResponse } from "../models";
import { executeGraphQL } from './graphql.server';

const superheroFragment = `#graphql
    fragment SuperheroFields on Superhero {
        id,
        name,
        description,
        height
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

export async function createSuperhero(superhero: Superhero): Promise<Superhero> {
    const body = `#graphql
        mutation CreateSuperhero($superhero: CreateSuperheroInput!){
            addSuperhero(superhero: $superhero) {
                ...SuperheroFields
            }
        }

        ${superheroFragment}
    `;
    
    delete superhero.id;

    const response = await executeGraphQL<CreateSuperheroResponse>(body, {
        superhero: superhero
    });

    return response.data.addSuperhero;
}

export async function updateSuperhero(superhero: Superhero): Promise<Superhero> {
    const body = `#graphql
        mutation UpdateSuperhero($superhero: SuperheroInput!){
            updateSuperhero(superhero: $superhero) {
                ...SuperheroFields
            }
        }

        ${superheroFragment}
    `;
    
    const response = await executeGraphQL<UpdateSuperheroResponse>(body, {
        superhero: superhero
    });

    return response.data.updateSuperhero;
}

export async function deleteSuperhero(id: String): Promise<Superhero> {
    const body = `#graphql
        mutation DeleteSuperhero($id: UUID!){
            deleteSuperhero(id: $id) {
                name,
                description
            }
        }
    `;
    
    const response = await executeGraphQL<UpdateSuperheroResponse>(body, {
        id: id
    });

    return response.data.updateSuperhero;
}