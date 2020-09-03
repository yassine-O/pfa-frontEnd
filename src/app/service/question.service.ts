import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  host = "http://localhost:8080/recruteur/";

  constructor(public http: HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>(this.host+"categories")
  }

  getQuestions(id){
    return this.http.get<Question[]>(this.host+"categories/"+id+"/questions")
  }

  addCategory(libelle){
    return this.http.post(this.host, libelle);
  }

  addQuestion(idCategore:Number, formData){
    return this.http.post(this.host+"categories/"+idCategore+"/questions", formData);
  }

  addTest(description:string, questions:Array<Question>){
    let data = {
      description:description,
      questions:questions
    }
    return this.http.post(this.host+"tests",data);
  }

}
