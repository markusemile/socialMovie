import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationErrorService implements HttpInterceptor{

  constructor(private toastr: ToastrService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(
      catchError((error)=> throwError(()=>'ERRRRREURRRRR:'))
    )
  }

  options : Partial<IndividualConfig> = {
    positionClass: 'toast-top-right',
    disableTimeOut: false
  }


  showError(message:string,title:string='Error'){
    this.toastr.error(message,title,{...this.options});
  }

  showSuccess(message:string,title:string='success'){
    this.toastr.success(message,title,{...this.options});
  }
  
  showInfo(message:string,title:string='info'){ 
    this.toastr.info(message,title,{...this.options});
  }
  showWarning(message:string,title:string='warning'){
    this.toastr.warning(message,title,{...this.options});
  }

  

}
