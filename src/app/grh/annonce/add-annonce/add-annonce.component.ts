import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
 annonce=new Annonce();
  constructor() { }

  ngOnInit(): void {
  }
  saveAnnonce(){
    console.log("saving annonce");
    console.log(this.annonce)
  }
  
}
