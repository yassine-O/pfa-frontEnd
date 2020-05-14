import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from './video';
import { Category } from '../category/category.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input () selectMode:boolean=false;
  categories:Category[];
  videos:Video[];
  page=1;
  @Output() videoSelected= new EventEmitter<Video>();
  nombreVideo=30;
  pages:number[];
  loading=false;
  constructor() 
  {
    
    let i=1
    let nombrepages=Math.floor(this.nombreVideo/9)
    console.log(nombrepages)
    this.pages=[];
    while(nombrepages>=i){
      this.pages.push(i);
      i++;
    }
    this.categories=[];
    this.videos=[];
    let video=new Video();
    video.titre="Some quick example text to build on the card title and make up the bulk of the card's content.";
    video.path="http://localhost:8080/videos1"
    video.id=1;
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.categories=[];
    let c1=new Category();
    let c2=new Category();
    let c3=new Category();
    c1.libelle="programming";
    c1.idCategorie=1;
    c2.libelle="finance";
    c2.idCategorie=2;
    c3.libelle="marketing"
    c3.idCategorie=3;
    c1.libelle="programming";
    c1.idCategorie=1;
    c2.libelle="finance";
    c2.idCategorie=2;
    c3.libelle="marketing"
    c3.idCategorie=3;
    c1.libelle="programming";
    c1.idCategorie=1;
    c2.libelle="finance";
    c2.idCategorie=2;
    c3.libelle="marketing"
    c3.idCategorie=3;
    c1.libelle="programming";
    c1.idCategorie=1;
    c2.libelle="finance";
    c2.idCategorie=2;
    c3.libelle="marketing"
    c3.idCategorie=3;
    c1.libelle="programming";
    c1.idCategorie=1;
    c2.libelle="finance";
    c2.idCategorie=2;
    c3.libelle="marketing"
    c3.idCategorie=3;
    c1.libelle="programming";
    c1.idCategorie=1;
    c2.libelle="finance";
    c2.idCategorie=2;
    c3.libelle="marketing"
    c3.idCategorie=3;
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
   }

  ngOnInit(): void {
  }
  catSelected(cat){
      this.loading=true;
      setTimeout(
        ()=>{
          this.loading=false
        }
        ,4000
      )

      console.log(cat)
     
  }
  onSelectVideo(id:number){
        console.log("mmi")
        this.videoSelected.emit(this.videos[0])
  }
  

}
