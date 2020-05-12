import { Injectable } from '@angular/core';
import { Token } from './token';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor() { }
  getAuthorizationHeader():HttpHeaders{
    let header = new HttpHeaders();
    let token = new Token().getToken("token");
    console.log(token)
    let newHeader = header.append("Authorization", "Bearer " + token);//header is immutable
    console.log(header.has("Authorization"))
    return newHeader;
  }
}
