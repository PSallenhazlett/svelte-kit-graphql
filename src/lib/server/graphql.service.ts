import axios from "axios"
import https from "https";
import type { QueryResponse } from "../models";

const graphqlEndpoint = "https://localhost:7122/graphql";
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export async function executeGraphQL<T>(query: string, variables?: any): Promise<QueryResponse<T>> {
    try {
        var response = await axios.post(graphqlEndpoint, JSON.stringify({
            query: query,
            variables: variables || {}
        }), {
            headers: {
                "Content-Type": "application/json"
            },
            httpsAgent: httpsAgent
        });

        return response.data;
    }
    catch (e: any) {
        console.log("ERROR:", e);
        var resp: QueryResponse<T> = {
            data: <T>{},
        };

        return Promise.resolve(resp);
    }
}