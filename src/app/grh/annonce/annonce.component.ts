import { Component, OnInit } from '@angular/core';
import { Annonce } from './annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces: Annonce[];

  constructor(private route:Router) {
    this.annonces = [];
    let a = new Annonce();
    a.title = "title loooking for job"
    a.ville = "tANGER"
    a.salaireMin = 1700;
    a.salaireMax = 8999
    a.niveauEtude = "bac";
    a.typeDeContrat="CDI";
    a.profileRecherche="ingenieure"
    a.nomDeSociete="agri5.0 "
    a.ville="agadir"
    a.description="m est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est auss"
    a.id=1;
    a.date="2019-06-27"
    this.annonces.push(a);
    this.annonces.push(a);
    this.annonces.push(a);
    this.annonces.push(a);
    this.annonces.push(a);
    this.annonces.push(a);
    this.annonces.push(a);
    this.annonces.push(a);
  }

  ngOnInit(): void {
  }
  addAnnonce(){
    console.log("route")
      this.route.navigate(['Annonce/addAnnonce'])
  }

}
