import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { apisUrl, IService } from '../interface/service';
import { Movie } from '../model/movie-model';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { IMdbRequest } from '../interface/api-request';
import { NotificationErrorService } from '../../../../core/interceptors/notification-error.service';
import { IApiMovie } from '../interface/api-movie';
import { IMdbResponse } from '../interface/api-response';


export interface Credit {
  id: number
}

@Injectable({
  providedIn: 'root'
})

export class MovieService implements IService<IMdbResponse | Movie | Credit>, OnInit {


  private readonly http = inject(HttpClient)
  private header = environment.movieDb.headers;

  constructor(private notification: NotificationErrorService) { }

  /**
   * Function which returns the list of Movies in the requested section
   * 
   * @param section apisUrl value
   * @returns Observable<IMdbResponse>
   */
  getAllMovie(section: apisUrl): Observable<IMdbResponse> {
    const urls = environment.movieDb.api[section];
    if (!urls) {
      return throwError(() => new Error('Invalid Api section:' + section));
    }
    return this.http.get<IMdbRequest>(environment.movieDb.api[section], { headers: this.header }).pipe(
       map((response:IMdbRequest)=>({
        ...response,  
        results: response.results.map((movies:IApiMovie)=>Movie.fromApi(movies))        
      })),
    );
  }

  
/**
 * Retrieves detailed information about a specific movie.
 *
 * @param id - The unique identifier of the movie.
 * @returns An Observable containing the movie details.
 */
  getDetailMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(environment.movieDb.api.detail.replace('{:id}', id.toString()), { headers: this.header });
  }
    
  
  
  getCredits(id: number): Observable<Credit> {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

  }




}
