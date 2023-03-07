import type { 
    CreateSuperpowerResponse,
    DeleteSuperpowerResponse, 
    UpdateSuperpowerResponse,
    Superpower,
    SuperpowerResponse, 
    DeleteSuperpower
} from "../models";
import { executeGraphQL } from './graphql.service';

const superpowerFragment = `#graphql
    fragment SuperpowerFields on Superpower {
        id
        superPower
        description
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

export async function getSuperpowersBySuperheroId(superheroId: string) {
    var body = `#graphql
        query Superpowers($where: SuperpowerFilterInput!) {
            superpowers(where: $where) {
                ...SuperpowerFields
            }
        }

        ${superpowerFragment}
    `;

    const response = await executeGraphQL<SuperpowerResponse>(body, {
        where: {
            superheroId: {
                eq: superheroId
            }
        }
    });
    return response.data.superpowers;
}

export async function createSuperpower(superpower: Superpower): Promise<Superpower> {
    const body = `#graphql
        mutation CreateSuperpower($superpower: CreateSuperpowerInput!) {
            addSuperpower(superpower: $superpower) {
                ...SuperpowerFields
            }
        }

        ${superpowerFragment}
    `;
    
    delete superpower.id;

    const response = await executeGraphQL<CreateSuperpowerResponse>(body, {
        superpower: superpower
    });

    return response.data.addSuperpower;
}

export async function updateSuperpower(superpower: Superpower): Promise<Superpower> {
    const body = `#graphql
        mutation UpdateSuperpower($superpower: SuperpowerInput!){
            updateSuperpower(superpower: $superpower) {
                ...SuperpowerFields
            }
        }

        ${superpowerFragment}
    `;

    console.log("Mutation:", body);
    
    const response = await executeGraphQL<UpdateSuperpowerResponse>(body, {
        superpower: superpower
    });

    return response.data.updateSuperpower;
}

export async function deleteSuperpower(id: String): Promise<DeleteSuperpower> {
    const body = `#graphql
        mutation DeleteSuperpower($id: UUID!){
            deleteSuperpower(id: $id) {
                superPower
                description
            }
        }
    `;
    
    const response = await executeGraphQL<DeleteSuperpowerResponse>(body, {
        id: id
    });

    return response.data.deleteSuperpower;
}