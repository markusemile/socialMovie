import { Movie } from "../model/movie-model";
import { IApiMovie } from "./api-movie";

export interface IMdbRequest{
    page:number;
    results:IMovies;
    total_pages:number;
    total_results:number;
}

export type IMovies = IApiMovie[];