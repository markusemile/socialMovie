import { Movie } from "../model/movie-model";
import { IApiMovie } from "./api-movie";

export interface IMdbResponse{
    page:number;
    results:Movies;
    total_pages:number;
    total_results:number;
}

export type Movies = Movie[];