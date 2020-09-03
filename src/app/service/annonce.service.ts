import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  host = "http://localhost:8080/annonces/";

  constructor(private http : HttpClient) { }

  addAnnonce(annonce:Annonce){
    return this.http.post(this.host, annonce);
  }

  getRecruteurAnnonces(){
    return this.http.get<Annonce[]>(this.host);
  }

  addTestToAnnonce(idAnnonce:number, idTest:number){
    return this.http.put(this.host+idAnnonce+"/test",{id : idTest});
  }

}
