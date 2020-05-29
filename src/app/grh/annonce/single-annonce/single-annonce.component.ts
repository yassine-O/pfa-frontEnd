import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../annonce';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent implements OnInit {
  role:string="grh";
  loading=true;
  constructor(public annonce:Annonce,
    private route:Router,
    private activeRoute:ActivatedRoute,
    private annonceService:AnnonceService) {
    try{
      console.log(this.route.getCurrentNavigation().extras.state);
      this.annonce=Object.assign(new Annonce(),this.route.getCurrentNavigation().extras.state)
      console.log(this.annonce)
      this.loading=false
      // this.loading=false
    }catch(e){
          this.fetchAnnonceById()
    }
   
   }
  fetchAnnonceById(){
      let id=this.activeRoute.snapshot.paramMap.get("id");
      this.annonceService.getAnnonceById(id).subscribe(
        (data)=>{
          this.annonce=data;
          this.loading=false;
        },
        (err)=>{
            console.log("i ma heree")
            this.route.navigateByUrl("")
        }
      )
      
  }
  ngOnInit(): void {
    
  }
  deleteAnnonce(){
    this.annonceService.deleteAnnonce(this.annonce.idAnnonce).subscribe(
      (data)=>{
        this.route.navigate([""])
      }
    )
  }
  updateAnnonce(){
    this.route.navigate(["/addAnnonce"],{
      state:this.annonce
    })
  }
  addTest(){
    this.route.navigate(["addTest"])
  }

  

}
