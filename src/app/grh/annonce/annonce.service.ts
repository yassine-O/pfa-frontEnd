import { Injectable } from '@angular/core';
import { Annonce } from './annonce';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from 'src/app/sign-in-up/token';
import { AuthorizationService } from 'src/app/sign-in-up/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient,private authorizationService:AuthorizationService) { }
  saveAnnonce(annonce: Annonce) {
    let header = new HttpHeaders();
    let token = new Token().getToken("token");
    console.log(token)
    let newHeader = header.append("Authorization", "Bearer " + token);//header is immutable
    console.log(header.has("Authorization"))
    return this.http.post<Annonce>("http://localhost:8080/saveAnnonce", annonce,
      {
        headers: newHeader,
      }

    )
  }
  fechAnnonces(page:number){
    console.log("feching")
    
    return this.http.get<Annonce[]>("http://localhost:8080/Annonces?page="+page, 
      {
        headers: this.authorizationService.getAuthorizationHeader(),
        observe: 'response'
      }

    )
  }
  deleteAnnonce(id:number){
    return this.http.delete("http://localhost:8080/deleteAnnonce/"+id,{
      headers: this.authorizationService.getAuthorizationHeader()
    }
    )
  }
}
