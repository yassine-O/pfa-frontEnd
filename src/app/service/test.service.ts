import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  host = "http://localhost:8080/tests/";

  constructor(private http : HttpClient) { }

  getTests(){
    return this.http.get<Test[]>(this.host);
  }

}
