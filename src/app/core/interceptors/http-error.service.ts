import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, timeout } from 'rxjs';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService implements HttpInterceptor {

  constructor( private toastr: ToastrService) { }

  options : Partial<IndividualConfig> = {
    positionClass: 'toast-to-left',
    disableTimeOut: true,

  }
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    
    return next.handle(req).pipe(
      catchError((error)=>this.handleError(error,req))
    );
  }
  private handleError(error: HttpErrorResponse,req: HttpRequest<any>): Observable<never> {

    
    let errorMessage = "Error contact admin !";
    
    if(environment.devloppment===true){
      
      
      switch(error.status){
        case 400: errorMessage = "Bad Request"; break;
        case 401: errorMessage = "Unauthorized"; break;
        case 403: errorMessage = "Forbidden"; break;
        case 404: errorMessage = `Address Not Found : ${req.url}}`; break;
        case 500: errorMessage = "Internal Server Error"; break;
        case 503: errorMessage = "Service Unavailable"; break;
        default: errorMessage = `Error unknown ? ${error.status} - ${error.message}`;
      }
    }

    this.toastr.error(errorMessage,'Error',{...this.options});
    return throwError(()=> new Error(errorMessage));
  }
  
}
