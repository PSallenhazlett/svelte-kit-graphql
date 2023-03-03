import type { Superpower, SuperpowerResponse } from "../models";
import { executeGraphQL } from './graphql.server';

const superpowerFragment = `#graphql
    fragment SuperpowerFields on Superpower {
        id,
        superPower,
        description,
        superheroId
    }
`;

export async function getSuperpower(id: string): Promise<Superpower> {
    const body = `#graphql
        query Superpower($where: SuperpowerFilterInput!) {
            superpowers(where: $where) {
                ...SuperpowerFields
            }
        }

        ${superpowerFragment}
    `;
    
    const response = await executeGraphQL<SuperpowerResponse>(body, {
        where: {
            id: {
                eq: id
            }
        }
    });

    return response.data.superpowers[0];
}

export async function getSuperpowers(): Promise<Superpower[]> {
    var body = `#graphql
        query {
            superpowers {
                ...SuperpowerFields
            }
        }

        ${superpowerFragment}
    `;

    const response = await executeGraphQL<SuperpowerResponse>(body);
    return response.data.superpowers;
}