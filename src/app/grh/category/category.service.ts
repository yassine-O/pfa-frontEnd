import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from './category.model';
import { AuthorizationService } from 'src/app/sign-in-up/authorization.service';
import { Question } from '../videos/add-question/question';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private authorizationService: AuthorizationService) { }
  saveCategory(category: Category) {
    return this.http.post<Category>("http://localhost:8080/categorie",
      category,
      {
        headers: this.authorizationService.getAuthorizationHeader()
      })


  }
  fetchCategories() {
    return this
      .http
      .get<Category[]>(
        "http://localhost:8080/Categories",
        {
          headers: this.authorizationService.getAuthorizationHeader(),
        }
      )
  }
  addQuestionToCategorie(question: Question, idCategorie: number) {
    // i use put because the question but without metadata and category
    return this.http.put<Question>("http://localhost:8080/question?idCategory=" + idCategorie,
      question,
      {
        headers: this.authorizationService.getAuthorizationHeader(),
      }

    )
  }
}
