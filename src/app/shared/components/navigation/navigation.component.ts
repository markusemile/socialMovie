import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'smapp-navigation',
  imports: [],
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
