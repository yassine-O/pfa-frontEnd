import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/service/annonce.service';
import { Annonce } from 'src/app/model/annonce';
import { TestService } from 'src/app/service/test.service';
import { Test } from 'src/app/model/test';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonces : Annonce[];
  tests : Test[];

  constructor(private annonceService : AnnonceService, private testService : TestService) { }

  ngOnInit(): void {
    this.onGetAnnonces();
    this.onGetTests();
  }

  onGetAnnonces(){
    this.annonceService.getRecruteurAnnonces().subscribe
    (res=>{
      this.annonces = res;
    },err=>{

    })
  }

  onGetTests(){
    this.testService.getTests().subscribe
      (res=>{
        this.tests = res;
      },err=>{

      })
  }

  onPublish(data){
    this.annonceService.addTestToAnnonce(data.idAnnonce, data.idTest).subscribe
      (res=>{
        this.onGetAnnonces();
      },err=>{

      });
  }

}
