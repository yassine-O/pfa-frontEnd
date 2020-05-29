import { Component, OnInit, Input } from '@angular/core';
import { AuthorizationService } from '../sign-in-up/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerElement:string[];
  role:string;  
  constructor(public authorizationService:AuthorizationService) {
    this.role=this.authorizationService.role
   }

  ngOnInit(): void {
    let headers={
      "candidat":["Home","Demandes","Profil"],
      "grh":["Home","Entretien Passé","Testes","Questions","Annonce","Profil"]
    }
    this.headerElement=headers[this.role];
  }

}
