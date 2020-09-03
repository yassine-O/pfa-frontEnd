import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/model/annonce';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  annonces:Annonce[]=[];
  selectedAnnonce:Annonce;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(index){
    this.selectedAnnonce=this.annonces[index];
  }

}
