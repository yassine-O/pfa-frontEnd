import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Annonce {
    date:string
    idAnnonce:number;
    title:string;
    description:string;
    profileRecherche:string;
    avantages:string;
    salaireMin:number;
    salaireMax:number;
    typeDeContrat:string;
    nomDeSociete:string;
    niveauEtude:string;
    ville:string;
   
}
