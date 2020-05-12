import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnonceService } from '../annonce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  loading=false;
 annonce=new Annonce();
  constructor(private annonceService:AnnonceService,private route:Router) {
    try{
      console.log(this.route.getCurrentNavigation().extras.state);
      this.annonce=Object.assign(new Annonce(),this.route.getCurrentNavigation().extras.state)
      console.log(this.annonce)
      this.loading=false
      // this.loading=false
    }catch(e){
          
    }
   }

  ngOnInit(): void {
  }
  saveAnnonce(){
    console.log("saving annonce");
    console.log(this.annonce)
    this.annonceService.saveAnnonce(this.annonce).subscribe(
      (data)=>{
        console.log(data);
        this.route.navigate(["annonce/"+data.idAnnonce],{
          state:data
        })
      }
      

    )

    }
  
}
