import type { 
    CreateMovieResponse, 
    DeleteMovieResponse, 
    UpdateMovieResponse,
    Movie, 
    MovieResponse, 
    DeleteMovie 
} from "../models";
import { executeGraphQL } from './graphql.service';

const movieFragment = `#graphql
    fragment MovieFields on Movie {
        id
        title
        description
        releaseDate
        instructor
        superheroId
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

export async function createMovie(movie: Movie): Promise<Movie> {
    const body = `#graphql
        mutation CreateMovie($movie: CreateMovieInput!) {
            addMovie(movie: $movie) {
                ...MovieFields
            }
        }

        ${movieFragment}
    `;

    delete movie.id;

    const response = await executeGraphQL<CreateMovieResponse>(body, {
        movie: movie
    });

    return response.data.addMovie;
}

export async function updateMovie(movie: Movie): Promise<Movie> {
    const body = `#graphql
        mutation UpdateMovie($movie: MovieInput!) {
            updateMovie(movie: $movie) {
                ...MovieFields
            }
        }

        ${movieFragment}
    `;

    const response = await executeGraphQL<UpdateMovieResponse>(body, {
        movie: movie
    });

    return response.data.updateMovie;
}

export async function deleteMovie(id: string): Promise<DeleteMovie> {
    const body = `#graphql
        mutation DeleteMovie($id: UUID!) {
            deleteMovie(id: $id) {
                title
                description
            }
        }
    `;

    const response = await executeGraphQL<DeleteMovieResponse>(body, {
        id: id
    });

    return response.data.deleteMovie;
}