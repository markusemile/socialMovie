import { Component } from '@angular/core';
import { NotificationErrorService } from '../../core/interceptors/notification-error.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'smapp-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private notificationService:NotificationErrorService){}

 

}
