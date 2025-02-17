import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'smapp-navigation',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @ViewChild('collapseMenu') collapseMenu!:ElementRef<HTMLDivElement>; 
  showMenu:boolean = true;

  toggleMenu(){
   this.collapseMenu.nativeElement.classList.toggle('hide-sm');
  }
}
