export interface Superhero {
    id?: string;
    name: string;
    description: string;
    height: number;
}

export interface Superpower {
    id: string;
    superPower: string;
    description: string;
    superheroId: string;
}

export interface Movie {
    id: string;
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

export interface UpdateSuperheroResponse {
    updateSuperhero: Superhero;
}