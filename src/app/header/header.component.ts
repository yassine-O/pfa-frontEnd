import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerElement:string[];
  @Input()role:string;  
  constructor() { }

  ngOnInit(): void {
    let headers={
      "candidat":["Home","Entretien","Demandes","Profil","logout"],
      "grh":["Home","Entretien","Question","Annonce","Profil","logout"]
    }
    this.headerElement=headers[this.role];
  }

}
