import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>("http://localhost:8080/recruteurs/categories")
  }
  getQuestions(id){
    return this.http.get<Question[]>("http://localhost:8080/recruteurs/categories/"+id+"/questions")
  }

}
