import { Injectable } from '@angular/core';
import { Question } from 'src/app/grh/questions/add-question/question';
import { HttpClient } from '@angular/common/http';
import { AuthorizationService } from 'src/app/sign-in-up/authorization.service';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient, private authSevice:AuthorizationService) { }
  getTest(idTest:number){
    return this.http.get<Test>("http://localhost:8080/test/"+idTest,
    {
      headers:this.authSevice.getAuthorizationHeader()
    })
    
  }
  saveEntretien(idEntretien:number,idTest:number){
      console.log(idEntretien+" "+idTest)
      return this.http.post("http://localhost:8080/entretien/"+idEntretien+"/"+idTest,{

      },
      {
        headers:this.authSevice.getAuthorizationHeader()
      });
  }
}
