import { Injectable } from '@angular/core';
import { Annonce } from './annonce';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from 'src/app/sign-in-up/token';
import { AuthorizationService } from 'src/app/sign-in-up/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient
    //,
    //private authorizationService:AuthorizationService
    ) { }
  saveAnnonce(annonce: Annonce) {
    
    return this.http.post<Annonce>("http://localhost:8080/saveAnnonce", annonce
    )
  }
  fechAnnonces(page:number){
    console.log("feching")
    
    return this.http.get<Annonce[]>("http://localhost:8080/Annonces?page="+page, 
      {
        //headers: this.authorizationService.getAuthorizationHeader(),
        observe: 'response'
      }

    )
  }
  deleteAnnonce(id:number){
    return this.http.delete("http://localhost:8080/deleteAnnonce/"+id
    //,
    // {
    //   headers: this.authorizationService.getAuthorizationHeader()
    // }
    )
  }
  getAnnonceById(idAnnonce){
      return this.http.get<Annonce>("http://localhost:8080/annonce/"+idAnnonce
      );

        
  }
}
