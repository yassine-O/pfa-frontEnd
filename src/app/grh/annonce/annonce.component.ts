import { Component, OnInit } from '@angular/core';
import { Annonce } from './annonce';
import { Router } from '@angular/router';
import { AnnonceService } from './annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces: Annonce[];
  totalPages:number;
  pages:number[];
  loading:boolean=true;
  constructor(private route:Router,private annonceService:AnnonceService) {
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
    a.idAnnonce=1;
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
    this.annonceService.fechAnnonces(1).subscribe(
      (data)=>{
        console.log(data);
        const totalPages = data.headers.get('page');
        this.annonces=data.body;
        this.totalPages=parseInt(totalPages);
        let i=1;
        this.pages=[];
        while(this.totalPages>=i){
            this.pages.push(i);
            i++;
        }
       this.loading=false;
      },
      (error)=>{
        console.log("error")
      }
    )
  }
  addAnnonce(){
    console.log("route")
      this.route.navigate(['addAnnonce'])
  }
  public getFirst247(word:string):string{
    console.log("getFirst247")
    return word.substring(0,247);
}
public goToPage(page:number){
        this.loading=true;
        this.annonceService.fechAnnonces(page).subscribe(
          (data)=>{
            this.annonces=data.body;
            this.loading=false;
          }
        )
}
goToAnnonce(idAnnonce:number){
 
  this.route.navigate(["annonce/"+idAnnonce],{
    state:this.getAnnonceById(idAnnonce)
  })
}
getAnnonceById(id:number):Annonce{
  let annonce=new Annonce();
  this.annonces.forEach(
    (annonce1)=>{
      annonce1.idAnnonce==id?annonce=annonce1:"pass"
    }
  )
  return annonce;
}

}
