import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from './token';

@Injectable(
    {
        providedIn: 'root'
      }
)
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token:Token){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization:`Bearer ${this.token.getToken('token')}`
            }
        });
        console.log(request+"incerptoooooooor");
        return next.handle(request);
    }
}