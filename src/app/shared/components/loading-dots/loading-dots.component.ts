import { Component, Input } from '@angular/core';

@Component({
  selector: 'smapp-loading-dots',
  imports: [],
  templateUrl: './loading-dots.component.html',
  styleUrl: './loading-dots.component.scss'
})
export class LoadingDotsComponent {

  @Input() text?: string;

}
