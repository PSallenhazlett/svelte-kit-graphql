import type { Movie, MovieResponse } from "../models";
import { executeGraphQL } from './graphql.server';

const movieFragment = `#graphql
    fragment MovieFields on Movie {
        id,
        title,
        description,
        instructor,
        releaseDate,
        superheroId,
        }
`;

export async function getMovie(id: string): Promise<Movie> {
    const body = `#graphql
        query Movie($where: MovieFilterInput!) {
            movies(where: $where) {
                ...MovieFields
            }
        }

        ${movieFragment}
    `;
    
    const response = await executeGraphQL<MovieResponse>(body, {
        where: {
            id: {
                eq: id
            }
        }
    });

    return response.data.movies[0];
}

export async function getMovies(): Promise<Movie[]> {
    var body = `#graphql
        query {
            movies {
                ...MovieFields
            }
        }

        ${movieFragment}
    `;

    const response = await executeGraphQL<MovieResponse>(body);
    return response.data.movies;
}