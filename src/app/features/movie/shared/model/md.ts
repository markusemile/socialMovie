import { __assign } from "tslib"
import { environment } from "../../../../../environments/environment.development"
import { concat } from "rxjs"
import { IApiMovie } from "../interface/api-movie"

export class Movie {
    adult: boolean
    backdropPath!: string
    belongsToCollection!: BelongsToCollection
    budget!: number
    genres!: Genre[]
    homepage!: string
    id: number|null
    imdbId!: string
    originCountry!: string[]
    originalLanguage!: string
    originalTitle!: string
    overview!: string
    popularity!: number
    posterPath!: string
    posterPathList!: string
    productionCompanies!: ProductionCompany[]
    productionCountries!: ProductionCountry[]
    releaseDate!: string
    revenue!: number
    runtime!: number
    spokenLanguages!: SpokenLanguage[]
    status!: string
    tagline!: string
    title: string
    video!: boolean
    voteAverage!: number
    voteCount!: number

    constructor(private data: Partial<IApiMovie>) {
        const path = environment.movieDb.api;
        this.id = data.id ?? null;
        this.adult = data.adult ?? false;
        this.backdropPath = data.backdrop_path ? path.background + data.backdrop_path : '';
        this.posterPath = data.poster_path ? path.posterDetail + data.poster_path : '';
        this.posterPathList = data.poster_path ? path.posterList + data.poster_path : '';
        this.title = data.title ?? '';
        this.releaseDate = data.release_date ?? '';
    }
}





export interface BelongsToCollection {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
}

export interface Genre {
    id: number
    name: string
}

export interface ProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string
    name: string
}

export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
}
