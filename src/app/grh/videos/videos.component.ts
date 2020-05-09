import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { Category } from './category';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  categories:Category[];
  videos:Video[];
  page=1;
  nombreVideo=30;
  pages:number[];
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
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
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
      console.log(cat)
  }

}
