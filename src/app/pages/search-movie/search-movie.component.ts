import { Component, inject, OnInit } from '@angular/core';
import { NotificationErrorService } from '../../core/interceptors/notification-error.service';
import { MovieListComponent } from "../../features/movie/shared/components/movie-list/movie-list.component";
import { IMdbRequest } from '../../features/movie/shared/interface/api-request';
import { MovieService } from '../../features/movie/shared/services/movie.service';
import { LoadingDotsComponent } from "../../shared/components/loading-dots/loading-dots.component";
import { MovieFiltersComponent } from "../../features/movie/shared/components/movie-filters/movie-filters.component";
import { IMdbResponse } from '../../features/movie/shared/interface/api-response';



@Component({
  selector: 'smapp-search-movie',
  imports: [LoadingDotsComponent, MovieListComponent, MovieFiltersComponent,MovieFiltersComponent],
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.scss',
})
export class SearchMovieComponent implements OnInit{

  loading: boolean = false;

  searchQuery! : IMdbResponse;
  private readonly service = inject(MovieService);
  private readonly notification = inject(NotificationErrorService);
  

  ngOnInit(): void {
    this.loading=true;
      this.service.getAllMovie('popular').subscribe({
        next:(datas:IMdbResponse)=>{      
          console.log(datas);    
          this.searchQuery=datas},      
        error: (error: any) =>{
          this.notification.showError('Not possible to get movie list');
          this.loading=false},
        complete: () => this.loading=false})
  }
}
