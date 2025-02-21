import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'smapp-movie-details',
  imports: [ ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {

  constructor( private activeRoute : ActivatedRoute,private route:Router)  { }
  
  
  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params);
    
    if(this.activeRoute.snapshot.params['id'] !== undefined || this.activeRoute.snapshot.params['title'] !== undefined){
      const title =  this.activeRoute.snapshot.params['title'] ;
      const id = this.activeRoute.snapshot.params['id'];    
      document.title=`${id}-${title}`;
      
    }
    
  }
}
