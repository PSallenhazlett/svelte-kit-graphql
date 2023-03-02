export interface Superhero {
    id: string;
    name: string;
    description: string;
}

export interface QueryResponse<T> {
    data: T;
}

export interface SuperheroResponse {
    superheroes: Superhero[];
}