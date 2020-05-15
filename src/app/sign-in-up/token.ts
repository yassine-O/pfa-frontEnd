import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Token {
    
    
    saveToken(token:string,nameToken:string){
        localStorage.setItem(nameToken,token);
    }
    getToken(name):string{
        return localStorage.getItem(name);
    }
    removeToken(token:string){
        localStorage.removeItem(token)
    }
    
}