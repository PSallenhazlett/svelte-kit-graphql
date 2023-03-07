export interface Superhero {
    id?: string;
    name: string;
    description: string;
    height: number;
    movies?: Movie[];
    superpowers?: Superpower[];
}

export interface Superpower {
    id?: string;
    superPower: string;
    description: string;
    superheroId: string;
}

export interface Movie {
    id?: string;
    title: string;
    description: string;
    instructor: string;
    releaseDate: Date;
    superheroId: string;
}

export interface QueryResponse<T> {
    data: T;
}

export interface SuperheroResponse {
    superheroes: Superhero[];
}

export interface SuperpowerResponse {
    superpowers: Superpower[];
}

export interface MovieResponse {
    movies: Movie[];
}

export interface CreateSuperheroResponse {
    addSuperhero: Superhero;
}

export interface CreateSuperpowerResponse {
    addSuperpower: Superpower;
}

export interface CreateMovieResponse {
    addMovie: Movie;
}

export interface UpdateSuperheroResponse {
    updateSuperhero: Superhero;
}

export interface UpdateSuperpowerResponse {
    updateSuperpower: Superpower;
}

export interface UpdateMovieResponse {
    updateMovie: Movie;
}

export interface DeleteSuperheroResponse {
    deleteSuperhero: Superhero;
}

export interface DeleteSuperpowerResponse {
    deleteSuperpower: Superpower;
}

export interface DeleteMovieResponse {
    deleteMovie: DeleteMovie;
}

export interface DeleteSuperhero {
    name?: string;
    description?: string;
}

export interface DeleteSuperpower {
    superPower?: string;
    description?: string;
}

export interface DeleteMovie {
    title?: string;
    description?: string;
}