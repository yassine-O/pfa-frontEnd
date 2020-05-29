import { Injectable } from '@angular/core';
import { Question } from '../questions/add-question/question';
import { HttpClient } from '@angular/common/http';
//import { AuthorizationService } from 'src/app/sign-in-up/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient,
   // private authorizationService:AuthorizationService
    ) { }
  fetchQuestion(idCatgory:number,page:number){
    return this.http.get<Question[]>("http://localhost:8080/questions/"+idCatgory+"?page="+page,
    {
      //headers: this.authorizationService.getAuthorizationHeader(),
      observe: 'response'
    })
  }
}
