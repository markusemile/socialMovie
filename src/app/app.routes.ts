import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import { MyMovieComponent } from './pages/my-movie/my-movie.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {title:'home-page',path:'home',component:HomeComponent},
    {title:'search-movie',path:'search-movie',component:SearchMovieComponent},
    {title:'my-movie',path:'my-movie',component:MyMovieComponent},
    {title:'mu profile',path:'profile',component:ProfileComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:HomeComponent}
];
