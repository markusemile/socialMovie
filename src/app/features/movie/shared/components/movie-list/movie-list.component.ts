import { Component, Input } from '@angular/core';
import { IMdbRequest } from '../../interface/api-request';
import { MovieCard01Component } from '../movie-card-01/movie-card-01.component';
import { IMdbResponse } from '../../interface/api-response';

@Component({
  selector: 'smapp-movie-list',
  imports: [MovieCard01Component],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  displayCard:boolean=true;

  @Input('movies') movies? : IMdbResponse;


}
