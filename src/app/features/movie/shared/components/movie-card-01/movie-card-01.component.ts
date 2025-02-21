import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie-model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConvertToUriPipe } from '../../../../../shared/pipes/convert-to-uri.pipe';

@Component({
  selector: 'smapp-movie-card-01',
  imports: [RouterLink,ConvertToUriPipe],
  templateUrl: './movie-card-01.component.html',
  styleUrl: './movie-card-01.component.scss'
})
export class MovieCard01Component  {
  
  @Input('movie') movie! : Movie;

  constructor(private activeRoute:ActivatedRoute) { }
 

  
} 
