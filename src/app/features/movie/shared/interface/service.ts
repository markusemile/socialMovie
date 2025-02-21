import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment.development";

/**
 * search api url to create a type
 */
export type apisUrl = Extract<keyof typeof environment.movieDb.api, string>; 


export interface IService<T> {
  
  /**
   * @return movie list  of an api adress
   */
    getAllMovie(section:apisUrl): Observable<T>;
  

    /**
     * rturn all movie details
     * 
     * @param id movie id
     * @returns movie details
     */
    getDetailMovie(id: number): Observable<T>;

    /**
     * return credits of a movie
     * 
     * @param :id movie id
     * @returns credits
     */
    getCredits(id: number): Observable<T>;
    
  

  }