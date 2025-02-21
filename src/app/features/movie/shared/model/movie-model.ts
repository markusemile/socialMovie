import { __assign } from "tslib"
import { environment } from "../../../../../environments/environment.development"
import { concat } from "rxjs"
import { IApiMovie } from "../interface/api-movie"

export class Movie {
    adult?: boolean
    backdropPath?: string
    belongsToCollection?: BelongsToCollection
    budget?: number
    genres?: Genre[]
    homepage?: string
    id?: number
    imdbId?: string
    originCountry?: string[]
    originalLanguage?: string
    originalTitle?: string
    overview?: string
    popularity?: number
    posterPath?: string
    posterPathList?: string
    productionCompanies?: ProductionCompany[]
    productionCountries?: ProductionCountry[]
    releaseDate?: string
    revenue?: number
    runtime?: number
    spokenLanguages?: SpokenLanguage[]
    status?: string
    tagline?: string
    title?: string
    video?: boolean
    voteAverage?: number
    voteCount?: number

    constructor(private data: Partial<Movie>) {
      Object.assign(this, data);
    }

    static fromApi(iMovie: IApiMovie): Movie {
        const path=environment.movieDb.api;
       return new Movie({
        id: iMovie.id ?? null,
        adult: iMovie.adult ?? false,
        backdropPath: iMovie.backdrop_path ? path.background + iMovie.backdrop_path : '',
        belongsToCollection: iMovie.belongs_to_collection ?? null,
        budget: iMovie.budget ?? null,
        genres: iMovie.genres ?? null,
        homepage: iMovie.homepage ?? null,
        imdbId: iMovie.imdb_id ?? null,
        originCountry: iMovie.origin_country ?? null,
        originalLanguage: iMovie.original_language ?? null,
        originalTitle: iMovie.original_title,
        overview: iMovie.overview ?? null,
        popularity: iMovie.popularity ?? null,
        posterPath: iMovie.poster_path ? path.posterDetail + iMovie.poster_path : '',
        posterPathList: iMovie.poster_path ? path.posterList + iMovie.poster_path : '',
        productionCompanies: iMovie.production_companies ?? null,
        productionCountries: iMovie.production_countries ?? null,
        releaseDate: iMovie.release_date ?? null,
        revenue: iMovie.revenue ?? null,
        runtime: iMovie.runtime ?? null,
        spokenLanguages: iMovie.spoken_languages ?? null,
        status: iMovie.status ?? null,
        tagline: iMovie.tagline ?? null,
        title: iMovie.title ?? null,
        video: iMovie.video ?? null,
        voteAverage: iMovie.vote_average ?? null,
        voteCount: iMovie.vote_count ?? null

       })

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
