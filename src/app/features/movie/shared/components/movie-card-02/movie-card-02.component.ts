import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie-model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConvertToUriPipe } from '../../../../../shared/pipes/convert-to-uri.pipe';

@Component({
  selector: 'smapp-movie-card-02',
  imports: [RouterLink,ConvertToUriPipe],
  templateUrl: './movie-card-02.component.html',
  styleUrl: './movie-card-02.component.scss'
})
export class MovieCard02Component {

    @Input('movie') movie! : Movie; 
  
    constructor(private activeRoute:ActivatedRoute) { }
   
  
}
