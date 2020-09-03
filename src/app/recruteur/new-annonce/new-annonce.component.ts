import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-new-annonce',
  templateUrl: './new-annonce.component.html',
  styleUrls: ['./new-annonce.component.css']
})
export class NewAnnonceComponent implements OnInit {

  public Editor = ClassicEditor;
  public config = {removePlugins: ['MediaEmbed','ImageUpload'] };
  annonce : Annonce = new Annonce();

  constructor(private annonceService :AnnonceService) { }

  ngOnInit(): void { }
  
  onAddAnnonce(){
    if(this.annonce.descriptionPoste.trim()==""){
      alert("Veuillez saisir une description pour le poste");
    }
    else{
      this.annonceService.addAnnonce(this.annonce)
        .subscribe(res=>{

        },err=>{

        });
    }
  }

}
